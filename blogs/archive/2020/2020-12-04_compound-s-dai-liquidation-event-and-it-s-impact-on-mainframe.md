
# Compound’s DAI liquidation event and it’s impact on Mainframe

Compound’s DAI liquidation event and its impact on Mainframe

### Compound’s DAI Liquidity Event

Two weeks ago, DAI traded as high as $1.30 on Coinbase Pro. Compound relies on Coinbase as a price feed to help keep the protocol over-collateralized; which is great unless the DAI peg is manipulated. Unfortunately, this was the case, causing upwards of 85 million DAI in liquidations. While this is a large number, only 194 out of 200,000+ addresses were affected. However, analyzing how this impacted users and their expectations is important and worth paying attention to.
> Robert Leshner [recommends](https://www.comp.xyz/t/dai-liquidation-event/642) that potential changes could include modifying the DAI market parameters including the borrowing cap, modifying the DAI price feed by either tightening the anchor bounds or capping the price to $1.05, or removing the reporter and relying entirely on Uniswap in some or all cases.

Understanding this event and the tradeoffs to the solutions has informed which collateral type and target asset we will be be implementing into v1 of the Mainframe Lending Protocol. We intend to launch with support for Wrapped Bitcoin (WBTC) as our initial collateral type and USDC as our target asset. These decisions will help in lowering the probability of something similar happening within our system.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/880VLhzhsFU" frameborder="0" allowfullscreen></iframe></center>

### v0 Launch Timeline

As we all know, software development projects are difficult to predict when they are actually going to launch. There are many variables that can push things back and adding the pressure of an arbitrary deadline is unnecessary, especially when dealing with programmable money. With that said, our goal is to have this out the door in the beginning of the new year, so set your expectations for January 2021.


Source: https://blog.hifi.finance/compounds-dai-liquidation-event-and-it-s-impact-on-mainframe-84f9b826044f
