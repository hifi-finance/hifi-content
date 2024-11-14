#HIP 5 - Sheet Heads Collateral

# Summary

This improvement proposal aims to integrate the “[SHEETp](https://etherscan.io/token/0xc2bc2320D22D47D1e197E99D4a5dD3261ccf4A68)” token into the Hifi Protocol as collateral. The intent is to grant holders of [Sheet Heads NFT](https://opensea.io/collection/sheet-heads) the ability to borrow against their NFTs using the Hifi Protocol’s DeFi infrastructure with a conservative collateral ceiling and an admin-managed price feed.

The SHEETp Token is an ERC-20 representation of an ERC-721 Sheet Head NFT. Borrowers will be originating a loan using their $SHEETp as collateral. Capital for the loans will be sourced from the Hifi Lending Protocol.

# Background

Hifi Labs created Pooled NFT to address the challenges NFT communities face, and the Hifi community has been patiently waiting to unlock borrowing against their NFTs. To act as a safe testing ground for onboarding projects while highlighting the benefits of the Hifi Ecosystem, the team needed a flagship NFT project that they had complete control over. That is where Sheet Heads comes in. The Sheet Heads mint remained open for nearly two months. This period has allowed for price discovery of SHEETp to occur and was the last key input needed to integrate the SHEETp token into the Hifi Protocol as collateral.

# Potential Risks

Sheet Heads is a digital collectible that can be highly volatile and has relatively low liquidity, meaning it could be a source of bad debt on our protocol. A scenario wherein an attacker manipulates an increase in the price being fed to Hifi’s Lending protocol could result in bad debt. To mitigate against this scenario, our core team has implemented several safeguards.

# Safe Guards

1. Durable Liquidity
2. Admin-managed Price Ceiling
3. Conservative Collateralization Ratio
4. Generous Liquidation Incentive
5. Time-Weighted Average Price Feed (TWAP)
6. Conservative Collateral Ceiling

### Durable Liquidity

Hifi Labs is committed to keeping its liquidity on chain, primarily concentrated in a full range SHEETp/USDC market. This liquidity powers the SHEETp TWAP feed from a Uniswap V3 pool.

### Admin-managed Price Ceiling

Hifi Labs has implemented a custom price feed that requires manual interaction to allow the price feed to increase above a set threshold. The initial price ceiling will be set to ~150% of the current price of SHEETp. At the time of writing SHEETp is valued at ~$33 which would put the price ceiling at $50. Suppose the price of SHEETp were to increase suddenly. In that case, this manual control requires that the Labs team explicitly acknowledge the market conditions before any increase in borrowing power is extended to SHEETp token holders.

### Conservative Collateral Ratio

The collateral ratio will be configured to 333%. This means SHEETp holders must post ~$3 for every $1 they borrow. This is another way of saying SHEETp will have a 30% loan-to-value requirement.

## Generous Liquidation Incentive

The liquidation incentive is set to 50%. When borrowers fall behind in maintaining the required collateralization ratio, liquidators will have a generous buffer and incentive to liquidate positions. In practice, this means a liquidator can profit up to 50% of the value of the liquidated position.

### Time-Weighted Average Price Feed (TWAP)

Using Uniswap v3 TWAP as our price feed helps guard against inorganic price action. The TWAP is initially configured for a 12-hour time span. This means that an attacker trying to manipulate the price of SHEETp would incur the expense of both moving and defending the price for every block for 12 hours to be successful. It is unlikely that this would be profitable for an attacker.

### Conservative Collateral Ceiling

The amount of SHEETp that is allowed to be deposited as collateral is limited to 4000 SHEETp tokens. Again, this helps limit the scope of the possible impact that SHEETp can have on the lending protocol if something were to go wrong.

With all these parameters and safeguards in place, it is the opinion of Hifi Labs that we are in a position to reasonably mitigate the risks of bad debt for the Hifi protocol.

# Benefits

The main value proposition of this proposal will be a demonstration of protocol capabilities and limitations that will apply to future collateral types while observing the impact collateralizing digital collectibles may have on a collection. Onboarding Sheet Heads as collateral onto Hifi’s Lending protocol to unlock borrowing provides the collection with additional liquidity for collectors.

# Voting

Upon majority approval, Hifi DAO will take the necessary technical steps to integrate SHEETp Token into the Hifi Protocol with the set collateral ceiling and TWAP.

If the majority vote disapproves, no further action will be taken regarding this proposal.

This proposal is now live on Tally: [HIP 5](https://www.tally.xyz/gov/hifi-dao/proposal/3?chart=0).
