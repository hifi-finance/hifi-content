
# HIP 6 Additional Details

HIP 6 Additional Details

Yesterday, HIP 6 introduced [Hifi’s Liquidity Bootstrapping Program](https://blog.hifi.finance/hip-6-liquidity-bootstrapping-program-46cf5ee9244e). Right now, our growth is directly tied to the amount of available liquidity we have to lend out within our protocol. To accelerate our growth, we must add more LP and Lender capital to the protocol. If you still need to read that blog post, go do it now, as this blog builds on what was shared yesterday.

In this blog post, we will cover additional details about how HIP 6 will be administered and the qualifications necessary to participate. Additionally, we will outline proposed changes to governance parameters, which will also be included in HIP 6. Let’s begin with the governance parameter updates.

## Governance Parameter Update

Included with HIP 6 is an update to the votingDelay parameter on [Hifi’s Governor Bravo Smart Contract](https://etherscan.io/address/0xdA161D0CFB4F836070e31fBf46Bd771FAE2F8E87#code). The Voting Delay parameter enforces a delay between new proposal submissions and when the snapshot is taken and voting begins. Our recommendation is to use the same value used by both Uniswap and Compound of 13,140 blocks or ~2 days of delay. This on-chain enforced delay strikes a healthy balance between being able to respond quickly to protocol updates if needed and providing an extra layer of assurance that governance will always have a guaranteed amount of time to prepare for proposal votes.

## Liquidity Program Additional Details

### Administration

The Liquidity Program will be administered by Hifi Labs. Newly minted tokens will be held in a multi-sig wallet by key stakeholders at Hifi Labs. Consistent with best practices, all wallets used to govern the multisig are hardware wallets. This is the multi-sig wallet address that will be used: [0x999540BF17c9A6EA03cD39B97476Af172Ddd04e1](https://etherscan.io/address/0x999540bf17c9a6ea03cd39b97476af172ddd04e1#code).

Hifi Labs will use the spot price for HIFI, according to [coinmarketcap](https://coinmarketcap.com/), to determine fair market price. In the case of high volatility or recent significant market movements, Hifi Labs may use up to a 7-day time-weighted average price (TWAP) to determine fair market price.

During any given month, if there is a remaining balance of unsold HIFI, that balance may roll over in future months and be made available for sale alongside that future month’s regular allotment of 2M HIFI tokens.

### Refunds

Participants will each be given the right but not the obligation to a full refund one year from the time of a given transaction. Participants will have seven days to notify Hifi Labs in accordance with their purchase agreement. The 7-day window to claim a refund begins 365 days from the time of the transaction and ends 372 days from that same time. Refunds must be exercised in full; no partial refunds will be accepted. Refunds will be issued in USDC, any active hUSDC token, or any combination thereof. Each hUSDC token will be valued at a price equal to 1 USDC.

### Participant Qualifications

All participants will be subject to KYC requirements and must not be a resident of any US-sanctioned country or be a US-sanctioned individual. For US residents, you must be an accredited investor to participate. A minimum transaction size of $100K is required. Only USD and USDC will be accepted.

## Summary

HIP 6 includes an update to the governance votingDelay parameter and the allocation of resources for Hifi’s Liquidity Bootstrapping Program.

If you haven’t done so already, please move your HIFI tokens to a wallet you control and delegate your voting power to participate in governance. Discussion is now live for [HIP 6](https://forum.hifi.finance/t/hip-6-liquidity-bootstrapping-program/303) on the Hifi Governance Forum. It is expected that this proposal will go live next Wednesday, December 6th.

Join the [forum conversation](https://forum.hifi.finance/t/hip-6-liquidity-bootstrapping-program/303) with fellow Hifi DAO members as we dive into HIP 6 and prepare for 2024, Hifi’s most ambitious and significant year yet!


Source: https://blog.hifi.finance/hip-6-additional-details-8ea692f89b32
