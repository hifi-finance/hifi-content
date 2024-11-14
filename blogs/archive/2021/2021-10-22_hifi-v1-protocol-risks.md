
# Hifi v1: Protocol Risks

Hifi v1: Protocol Risks

### A brief introduction to the risks of using our fixed-rate lending protocol.

Our focus at Hifi has always been security. We are committed to accelerating the world’s transition to decentralized finance, and this can only be done if the primitives enabling this transition are safe and secure.

This is why we want to be upfront with the various risks of using our protocol. What follows is a brief overview of the multiple attack vectors which could potentially impact users.

### Multisig management

Certain smart contracts within the lending protocol require an owner to administer key parameters to ensure the markets behave in safe predictable ways. The contracts will initially be controlled by the Hifi team. This will be done via a *multisig* wallet, to ensure that this initial centralization doesn’t lead to security risks for our users.
> **What is a multisig wallet?** A multi-signature wallet is a wallet controlled by multiple parties, where each transaction made by the wallet needs to be approved by a majority of these parties. You could create a multisig with your friends, and for every outgoing transaction 3 out of your 5 friends in the group would need to approve the transaction for it to be executed for example.

The use of a *multisig* wallet means that users inherently are trusting the Hifi team.

Once governance is deployed on mainnet giving token-holders the ability to vote on proposals, the control of the protocol will be transferred to the community. This means the team won’t have any control anymore via this *multisig* wallet.

### Upgradability

A subset of our smart contracts are upgradeable, meaning we can update the contracts at any time. This is again a temporary measure to ensure that while the protocol is still in its nascent stages we can quickly fix any discovered bugs. Most notably, the [BalanceSheetV1.sol](https://github.com/hifi-finance/hifi/blob/main/packages/protocol/contracts/core/balanceSheet/BalanceSheetV1.sol) and [FintrollerV1.sol](https://github.com/hifi-finance/hifi/blob/main/packages/protocol/contracts/core/fintroller/FintrollerV1.sol) are upgradable while the smart contracts that makeup out new [Automated Market Maker (AMM)](https://github.com/hifi-finance/hifi/tree/main/packages/amm/contracts) are ***not*** upgradable.

This does also lead to the risk that we could inadvertently introduce a new bug through a contract update, putting any funds in the protocol at risk.

### Polygon bridge

Given the protocol will initially only be deployed on the Polygon mainnet, it is important to highlight the risks regarding Polygon.

Your product is only as secure as the layers it’s built on top of. This is important to highlight, as it means you have to trust Polygon’s security as much as Hifi’s. [A double-spend bug was recently found in the Polygon bridge](https://medium.com/immunefi/polygon-double-spend-bug-fix-postmortem-2m-bounty-5a1db09db7f1), for example. This could have disrupted the entire network if an attacker had used it, fortunately it wasn’t.

### Smart contracts

The most obvious attack vector is the protocol itself. This could be under the form of a smart contract bug, or an economic exploit.

We continue to work to mitigate this risk. The community and our team have been actively testing the protocol since over two months now, we have recently hired a math specialist to review all the math powering our protocol, a new bug bounty program will be announced in the near term and we will soon begin the process of formally verifying the smart contracts to provide additional assurances to our users. We are working with [Certora](https://www.certora.com/) an industry leader in formal verification. They’ve helped secure protocols like [Compound and AAVE](https://www.certora.com/#Customers). This effort is ongoing and happening in parallel to this release of the protocol.
> **What is formal verification?** Formal verification is the act of proving that a piece of software is “correct” with regards to its intended behaviour. The reasoning behind the use of formal methods to verify software is that a rigorous mathematical analysis can contribute to its reliability and robustness.

### Chainlink

As you may know, our protocol is powered by Chainlink’s oracle feeds. Chainlink is considered by many as one of the most secure oracle providers out there.

The risk though is that if the feeds transmit wrong information into our protocol, unintended liquidations could take place, for example.

As with Polygon, trust is inherent in the Chainlink price feeds if you are looking to use our protocol.

### Directly interacting with the smart contracts

Bypassing our own user interfaces can be risky for certain operations, as the proxy which is used when using our user interface isn’t called when directly interacting with the contracts.

So unless you are highly knowledgeable about the ins and outs of the protocol, we would suggest only using it through our [website](https://app.hifi.finance).

### Only use funds you can afford to lose

To sum it all up, the best way to approach this public preview is to only use funds you are (really) ready to lose. Trust is required in the Polygon network, the Chainlink price feeds, our protocol as well as our team.


Source: https://blog.hifi.finance/hifi-v1-protocol-risks-61f467f75320
