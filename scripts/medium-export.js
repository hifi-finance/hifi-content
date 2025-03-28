#!/usr/bin/env node
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const https = require("https");
const { readdirSync, readFileSync } = require("fs");

// Regex to match markdown image syntax ![alt](url)
const imageRegex = /!\[.*?\]\((.*?)\)/g;

function extractImageURLs(markdownFile) {
  // console.log(`Extracting images from ${markdownFile}`);
  try {
    const content = fs.readFileSync(markdownFile, "utf8");
    const imageURLs = [];
    let match;

    // Extract all image URLs
    while ((match = imageRegex.exec(content)) !== null) {
      imageURLs.push(match[1]);
    }

    console.log(`Extracted ${imageURLs.length} images`);
    // console.log(imageURLs);
    return imageURLs;
  } catch (error) {
    console.error("Failed to extract images:", error.message);
    return [];
  }
}

async function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    https
      .get(url, (response) => {
        // Handle redirects
        if (response.statusCode === 301 || response.statusCode === 302) {
          const redirectUrl = response.headers.location;
          // If the redirect URL is relative, make it absolute
          const fullRedirectUrl = redirectUrl.startsWith("/")
            ? `https://cdn-images-1.medium.com${redirectUrl}`
            : redirectUrl;

          console.log(`Following redirect to: ${fullRedirectUrl}`);
          downloadImage(fullRedirectUrl, outputPath)
            .then(resolve)
            .catch(reject);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download image: ${response.statusCode}`));
          return;
        }

        // console.log(`Downloading: ${url} to ${outputPath}`);
        const fileStream = fs.createWriteStream(outputPath);
        response.pipe(fileStream);

        fileStream.on("finish", () => {
          fileStream.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

// When processing image URLs, add validation
function validateImageUrl(url) {
  // Check for NaN in URL which indicates an invalid dimension
  if (url.includes("/max/NaN/")) {
    // Try to fix the URL by using a default max dimension
    return url.replace("/max/NaN/", "/max/1600/");
  }
  return url;
}

// When downloading images
async function downloadImages(images, outputDir) {
  for (const imageUrl of images) {
    try {
      // Validate/fix URL before downloading
      const validatedUrl = validateImageUrl(imageUrl);
      const filename = path.basename(validatedUrl);
      const imgPath = path.join(outputDir, filename);
      await downloadImage(validatedUrl, imgPath);
    } catch (err) {
      console.warn(
        `Warning: Failed to download image ${imageUrl}: ${err.message}`
      );
      // Continue with other images instead of failing completely
      continue;
    }
  }
}

async function updateMarkdownImagePaths(markdownFile, blogFileName) {
  try {
    let content = fs.readFileSync(markdownFile, "utf8");

    // Update image paths to point to local files
    content = content.replace(imageRegex, (match, url) => {
      const filename =
        path.basename(url).split("?")[0] || `image-${Date.now()}.jpg`;
      const localPath = `../images/${blogFileName}/${filename}`;
      return `![](${localPath})`;
    });

    fs.writeFileSync(markdownFile, content);
    console.log("Updated markdown file with local image paths");
  } catch (error) {
    console.error("Failed to update markdown:", error.message);
  }
}

async function exportMediumArticle(url) {
  try {
    // get the metadata and sanitize it to parse into JSON
    let info = execSync(`mediumexporter ${url} --info`, { encoding: "utf8" });
    // console.log(info);
    //sanitize the info to be valid JSON, it's ugly but it works for what I needed it to here.
    // replace single quote literals with double quotes
    // need to escape colons in the info string
    info = info.replace(/'([^']+)'/g, '"$1"');
    info = info.replace("'", '"');
    info = info.replace("'http", '"http');
    info = info.replace("',", '",');
    info = info.replace("title", '"title"');
    info = info.replace(" date: ", '"date": "');
    info = info.replace("Z", 'Z"');

    info = info.replace("url", '"url"');
    info = info.replace("language", '"language"');
    info = info.replace("license", '"license"');
    console.log(info);
    const metadata = JSON.parse(info);

    // get the date and title from the metadata
    const date = new Date(metadata.date);
    const dateStr = date.toISOString().split("T")[0];
    const title = metadata.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    const filename = `${dateStr}_${title}`;
    const outputFile = `../blogs/archive/${date.getFullYear()}/${filename}.md`;

    // Export content to a temporary file
    const tempFile = `${outputFile}.temp`;
    execSync(`mediumexporter ${url} > ${tempFile}`, {
      stdio: "inherit",
    });
    // Append source link and move to final file
    execSync(
      `echo "\n\nSource: ${url}" >> ${tempFile} && mv ${tempFile} ${outputFile}`
    );
    console.log(`Exported: ${outputFile}`);

    // Extract and save images
    const images = extractImageURLs(outputFile);
    
    // // Download images
    const imageDir = `../blogs/archive/images/${filename}/`;
    await downloadImages(images, imageDir);
    // Update markdown to use local paths
    await updateMarkdownImagePaths(outputFile, filename);
    generateBlogIndex();
    console.log("Success");
    // return { markdownFile: outputFile, imageUrls: images };
    process.exit(0);
  } catch (error) {
    console.error("Export failed for", url, ":", error.message);
    process.exit(1);
  }
}

function generateBlogIndex() {
  const blogPath = path.join(__dirname, "..", "blogs", "archive");
  const blogs = [];

  // Get all year directories
  const years = readdirSync(blogPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();

  for (const year of years) {
    const yearPath = path.join(blogPath, year);

    // Get all markdown files in the year directory
    const files = readdirSync(yearPath).filter((file) => file.endsWith(".md"));

    for (const file of files) {
      try {
        // Read the first few lines of the file to extract title
        const content = readFileSync(path.join(yearPath, file), "utf8");
        const lines = content.split("\n");

        // Extract title from first h1 heading
        const titleMatch = lines.find((line) => line.startsWith("# "));
        const title = titleMatch ? titleMatch.replace("# ", "").trim() : file;

        // Extract date from filename (assumes format YYYY-MM-DD_title.md)
        const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
        const date = dateMatch ? dateMatch[1] : null;

        // Determine leadership based on year
        const yearNum = parseInt(year);
        const leadership = yearNum >= 2020 ? "Doug Leonard" : "Mick Hagen";

        blogs.push({
          title,
          date,
          path: `blogs/archive/${year}/${file}`,
          leadership,
        });

        // save to blog_index.json
        fs.writeFileSync(
          path.join(__dirname, "..", "blog_index.json"),
          JSON.stringify(blogs, null, 2)
        );
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
  }

  // Sort blogs by date in descending order
  blogs.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date) - new Date(a.date);
  });

  // Write to blog_index.json
  const outputPath = path.join(__dirname, "..", "blog_index.json");
  fs.writeFileSync(outputPath, JSON.stringify(blogs, null, 2));

  console.log(`Generated blog index with ${blogs.length} entries`);

  // After generating blog_index.json, also generate README.md
  generateReadme(blogs);

  return blogs;
}

// Add this function after the generateBlogIndex function

function generateReadme(blogs) {
  // Group blogs by year
  const blogsByYear = blogs.reduce((acc, blog) => {
    const year = blog.date.substring(0, 4);
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(blog);
    return acc;
  }, {});

  // Group blogs by leadership
  const blogsByLeadership = blogs.reduce((acc, blog) => {
    if (!acc[blog.leadership]) {
      acc[blog.leadership] = [];
    }
    acc[blog.leadership].push(blog);
    return acc;
  }, {});

  // Start building README content
  let content = `# Blog Archive Index

This repository contains our blog posts archive, organized chronologically. Each post is stored as a markdown file with a standardized naming format: \`YYYY-MM-DD_title-slug.md\`.
## Recent Blogs\n\n`;

  // Add the 5 most recent blogs
  const recentBlogs = blogs.slice(0, 5);
  recentBlogs.forEach((blog) => {
    const date = new Date(blog.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const relativePath = blog.path.replace('blogs/archive/', '');
    content += `- [${blog.title}](${relativePath}) - ${formattedDate}\n`;
  });

  content += `\n

## Posts by Year\n\n`;

  // Add year sections
  Object.keys(blogsByYear)
    .sort((a, b) => b - a) // Sort years in descending order
    .forEach((year) => {
      const yearBlogs = blogsByYear[year];
      content += `<details>\n<summary>&nbsp;<b>${year}</b></summary>\n\n`;
      yearBlogs
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach((blog) => {
          const date = new Date(blog.date);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          const relativePath = blog.path.replace('blogs/archive/', '');
          content += `- [${blog.title}](${relativePath}) - ${formattedDate}\n`;
        });
      content += `</details>\n\n`;
    });

  // Add leadership sections
  content += `## Posts by Leadership\n\n`;
  Object.keys(blogsByLeadership).forEach((leader) => {
    content += `<details>\n<summary>&nbsp;<b>${leader}</b></summary>\n<blockquote>\n`;

    // Group leader's blogs by year
    const leaderBlogsByYear = blogsByLeadership[leader].reduce((acc, blog) => {
      const year = blog.date.substring(0, 4);
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(blog);
      return acc;
    }, {});

    Object.keys(leaderBlogsByYear)
      .sort((a, b) => b - a)
      .forEach((year) => {
        content += `<details>\n<summary>&nbsp;<b>${year}</b></summary>\n\n`;
        leaderBlogsByYear[year]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .forEach((blog) => {
            const date = new Date(blog.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
            const relativePath = blog.path.replace('blogs/archive/', '');
            content += `- [${blog.title}](${relativePath}) - ${formattedDate}\n`;
          });
        content += `</details>\n\n`;
      });
    content += `</blockquote>\n</details>\n\n`;
  });

  // Add repository structure section
  content += `## Repository Structure

The blog posts are organized in yearly folders, with each post as a markdown file:

\`\`\``;

  // Write the README file
  const readmePath = path.join(
    __dirname,
    "..",
    "blogs",
    "archive",
    "README.md"
  );
  fs.writeFileSync(readmePath, content);
  console.log("Generated README.md");
}

// // Export functions
// module.exports = {
//   exportMediumArticle,
//   generateBlogIndex,
//   generateReadme,
// };

// // Export the new function
// module.exports = {
//   exportMediumArticle,
//   generateBlogIndex,
//   // ... other exports if needed
// };

// Get URL from command line arguments
const url = process.argv[2];

if (!url) {
  console.error("Please provide a Medium article URL as an argument");
  console.error("Usage: node medium-export.js <medium-article-url>");
  process.exit(1);
}

exportMediumArticle(url).catch(console.error);
// const file =
//   "../blogs/archive/2024/2024-11-11_hip-11-residential-construction-ruleset-amendment.md";
// const images = extractAndSaveImages(file);
// downloadImages(images, file);
// console.log(images);

// const blogFileName = path.basename(file, ".md");
// updateMarkdownImagePaths(file, blogFileName);

// generateBlogIndex();

// node medium-export.js https://medium.com/@hifi_finance/hip-11-residential-construction-ruleset-amendment-944444444444
