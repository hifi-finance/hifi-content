# Hifi Improvement Proposal (HIP) 1

> **Note:** There are no Requirements and KPIs sections in this proposal, contradicting [the guide we previously provided to the community](https://blog.hifi.finance/how-to-write-a-great-governance-proposal-fb8c6a0965b0). The reason is simple: we don’t ask for funding and have no other requirements, and it’s hard to have KPIs due to the nature of this HIP.

## Summary (TL;DR)

The first HIP introduces several technical improvements to enhance the user experience, software updates to stay updated regarding the package dependencies Hifi v1 relies on, and a new license to protect us from unauthorized forks.

## Background

Hifi v1 has been running smoothly on mainnet for a few months now, and this has given us the necessary time to slightly change the architecture of the protocol, and iterate on the user experience.

This proposal is the result of these iterations.

## Problem

There aren’t any real problems with the current version of the protocol, but there are quite a few things we could iterate on and improve.

A [low-severity bug was recently found](https://github.com/hifi-finance/hifi/issues/76) in the protocol, [a contract](https://github.com/hifi-finance/hifi/tree/58536dd22d56e54fe5e2a611e00eab45ab8b0724/packages/protocol/contracts/core/fintroller) which is currently upgradeable doesn’t need to be and the user experience could be improved regarding the vault logic as well as the transactions when interacting with the protocol.

The community has also mentioned at several occasions that the fully open-source nature of the codebase wasn’t necessarily appreciated due to the possibility of another project copying our code.

## Solution

What follows are the key elements of our proposal.

#### Make Fintroller non-upgradable

When we wrote the very first version of the protocol, we were unsure whether the [Fintroller](https://github.com/hifi-finance/hifi/tree/58536dd22d56e54fe5e2a611e00eab45ab8b0724/packages/protocol/contracts/core/fintroller) will end up holding users' money as well, on top of the deposits made in the [BalanceSheet](https://github.com/hifi-finance/hifi/tree/58536dd22d56e54fe5e2a611e00eab45ab8b0724/packages/protocol/contracts/core/balance-sheet).

To act precautionarily, we made it upgradeable. But now it's clear that the Fintroller is not holding any value - it's just a permissions controller. If there's a bug in it, we can just redeploy a new version and reset the permissions to the original values.

Finally, and most importantly, it's just much easier to maintain the Fintroller as a non-upgradeable contract because it contains many structs, and structs cannot be edited when upgrading.

#### Fix low-severity bug in Repay Borrow event

A[ low-severity bug was recently found](https://github.com/hifi-finance/hifi/issues/76) by one of our engineers in the Hifi v1 protocol and this release brings a fix for it. The bug is low-severity and doesn’t impact users’ holdings. The above linked GitHub issue gives more context, but the bug is simply that two function parameters were in the wrong order.

#### Rearchitect underlying backed hTokens

This logic has been removed from the balance sheet and placed in the hToken implementation. Depositing underlying in the hTokens makes for a better UX for end users and not creating underlying-backed vaults solves an issue related to volatile cryptos like WBTC not being usable as "underlying" for hTokens.

#### Update the Software License

We propose to change the current license ([LGPL](https://spdx.org/licenses/LGPL-2.0-or-later.html)) to the Business Source License 1.1 ([BUSL-1.1](https://spdx.org/licenses/BUSL-1.1.html)) which restricts unauthorized commercialization of our codebase until June 1 2024 after which the license will be changed to the GNU General Public License v3.0 ([GPL](https://spdx.org/licenses/GPL-3.0.html)) or a later version of it.

This will prevent unauthorized forks of the Hifi protocol and allow the Hifi DAO to benefit from the strong foundations the core team has built in the past couple of years.

#### Upgrade to Solidity v0.8.12

[This new version of Solidity](https://blog.soliditylang.org/2022/02/16/solidity-0.8.12-release-announcement/) improves the JavaScript / Wasm binary and fixes several bugs. It also offers a partial migration to Typescript.

#### Upgrade to latest versions of PRBMath

The leading advanced fixed-point math library which we have created has had several small updates in the past few months.

#### Add support for EIP-2612: Signature token approvals

This is a major upgrade for the user experience of our protocol. Users can now authorize the spending of their tokens in the same transaction as the actual spending of their tokens.

This is a first step towards an eventual deployment on the Ethereum mainnet where the gas fees are significantly higher and where this will really help users save money and make the general transaction flow smoother.

## Conclusion

We think this proposal is the right step forward after releasing Hifi v1 on mainnet a few months ago. It greatly improves the user experience, especially for new users. It protects the codebase from unauthorized forks and fixes certain issues regarding the protocol architecture.

As this is the first HIP, we will give some time to community members to withdraw their tokens on top of the time required to discuss and debate this proposal.
