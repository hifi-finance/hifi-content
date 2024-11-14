
# Voting Kickoff

Voting Kickoff

### The HIP 1 proposal is live on Snapshot!

To vote, [head over to the proposal page on Snapshot](https://vote.hifi.finance/#/proposal/0xa5ca513fd460b0eb1ed81c9b4e843f2cbcf88607b0594367aca6a14e75a2562f).

## HIP 1 Overview

[Here is the link](https://forum.hifi.finance/t/hifi-improvement-proposal-hip-1/107) to the full proposal on the Hifi forum.

* **Make Fintroller non-upgradable:** Given the [Fintroller](https://github.com/hifi-finance/hifi/tree/58536dd22d56e54fe5e2a611e00eab45ab8b0724/packages/protocol/contracts/core/fintroller) contract is not holding any value as it’s just a permissions controller, there is no reason to leave it as upgradeable.

* **Fix low-severity bug in Repay Borrow event:** A [low-severity bug was recently found](https://github.com/hifi-finance/hifi/issues/76) by one of our engineers in the Hifi v1 protocol and this release brings a fix for it.

* **Rearchitect underlying backed hTokens**: This logic has been removed from the balance sheet and placed in the hToken implementation.

* **Update the Software License:** Change the current license ([LGP 3.0](https://spdx.org/licenses/LGPL-2.0-or-later.html)) to the [BUSL-1.1](https://spdx.org/licenses/BUSL-1.1.html) license to prevent unauthorized forks during the next 2 years, similar to what Uniswap did with its v3 release.

* **Upgrade to Solidity v0.8.12:** This new version of Solidity improves the JavaScript / Wasm binary and fixes several bugs. It also offers a partial migration to Typescript.

* **Upgrade to latest versions of PRBMath:** The leading advanced fixed-point math library which we have created has had several small updates in the past few months.

* **Add support for EIP-2612** **Signature token approvals:** Users can now authorize the spending of their tokens in the same transaction as the actual spending of their tokens. This should greatly improve the overall user experience of Hifi v1.

## How to Prepare

### Requirements:

1. [Metamask](https://metamask.io/) wallet or[ Wallet Connect](https://walletconnect.com/registry/wallets)

1. [MFT](https://uniswap.exchange/swap?outputCurrency=0xdf2c7238198ad8b389666574f2d8bc411a4b7428) tokens

### Step-by-step Instructions for Snapshot

To begin, you will need MFT in your wallet. There are no gas fees involved as we will simply be signing a message.

### Step 1. Go to the [proposal page](https://vote.hifi.finance/#/proposal/0xa5ca513fd460b0eb1ed81c9b4e843f2cbcf88607b0594367aca6a14e75a2562f)

Once you are on the Snapshot website, connect your wallet by clicking on “Connect to a Wallet” in the top right corner.

![](../images/2022-06-10_voting-kickoff/0_cgZXfbS27TdlanWF)

Confirm this interaction in your wallet.

### Step 2. Cast your vote

Before voting, make sure to read the proposal and to read the linked topic on the Hifi forum. Given Hifi’s governance system is a democracy, the quality of the decision-making depends entirely on the quality of the thought process backing the votes of MFT token-holders.

Select one of the available voting options, and click on “Vote”. Next, confirm the message signature within your wallet.

## Airdrop

As a reminder, all who participate in this governance vote will qualify for an upcoming token airdrop. The amount you receive will be based on how much $MFT you vote with.

## Vote Timeline

The vote window will be open for 72 hours. If the 2% voting threshold is met and the proposal passes the process to implement the changes will begin. If the vote does not pass no changes will be made and future drafts of proposal may be considered in the future if necessary.

Join the conversation in [Discord](https://discord.com/invite/mhtSRz6) and [Twitter](https://twitter.com/hififinance) and help us redefine an industry.


Source: https://blog.hifi.finance/voting-kickoff-4f766ce589f4
