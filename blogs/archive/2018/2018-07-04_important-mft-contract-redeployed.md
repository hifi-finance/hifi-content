
# IMPORTANT: MFT contract redeployed

IMPORTANT: MFT contract redeployed

***Update**: We had our friends at Quantstamp do an audit of our re-deployed token contract (thanks for quick turnaround!). They’re giving us the thumbs up! Here is the [full audit report](https://mainframe.com/Mainframe_Secondary_Audit.pdf).*

**TL;DR**

* In order to protect the Mainframe community from a potential exploit beyond our control, we have redeployed the MFT token contract & are restarting distribution

* New address: [**0xdf2c7238198ad8b389666574f2d8bc411a4b7428](https://etherscan.io/address/0xdf2c7238198ad8b389666574f2d8bc411a4b7428)**

* ENS verification: [https://etherscan.io/address/token.mainframehq.eth](https://etherscan.io/address/token.mainframehq.eth)

* Recipients will receive same amount of new MFT for every old MFT (if they had already received), and old MFT will be locked permanently

* Unlocking is still on the same schedule — evening of July 4th when fireworks start going off in Utah, USA

Less than 24 hours before token launch and in the middle of initial token distribution, we were alerted (thanks to [Morgan Fitussi](https://github.com/MainframeHQ/contracts/issues/27)) that there was an issue with the ERC827 token standard that we were using for the MFT token contract. After some careful analysis of the described exploit and its potential to cause problems for MFT holders, we have ultimately made the decision to redeploy our token contract using the battle-tested ERC20 standard. We will be restarting distribution shortly.

Those who received the legacy batch of distributed MFT (with the vulnerable smart contract) will have those tokens locked in their wallets forever, hopefully as an imprint and a reminder of the mission we are pursuing. :)

## Context

The main draw of ERC827 is to have a more flexible token standard to be able to be execute more complex transactions and be forward compatible with newer contracts, while also being ERC20 compatible. For example we use this in our Onyx prototype to be able to stake tokens in a single `approveAndCall` transaction instead of the ERC20 dual `approve` and `transferFrom`.

While the token contract itself is safe, it is unfortunate that this flexibility can cause issues with 3rd party contracts that handle tokens, in particular contracts that handle other draft token standards such as ERC223, ERC667 and ERC777. These contracts can sometimes assume that a particular action has taken place (transferred 100 XYZ tokens) and trust that a callback from the XYZ token contract will inform them about the transfer’s success. A malicious user could exploit the callback mechanics of an ERC827 token contract to masquerade as one of these other contract types to call a privileged function in the token receiver contract. *A worst case example could be a malicious user withdrawing ERC827 tokens from a decentralized exchange that they didn’t own.*

So, while the ERC827 standard is not exploitable itself in its current form, it would potentially cause problems for the token handling ecosystem as a whole by retaining this very flexible callback mechanism. This token standard has currently been labelled as “proven unsafe” in the [Ethereum EIP repository](https://github.com/ethereum/EIPs/issues/827), and the implementation provided by OpenZeppelin has been [removed](https://github.com/OpenZeppelin/openzeppelin-solidity/pull/1045) pending further investigation. The old MFT contract has in fact been deployed since May and has been through rigorous audits, so we were lucky that this issue was brought to light before the official token launch.

## Moving Forward

Ultimately we wanted to do what is best for the holders of MFT and protect them now and in the future. We have decided to stop distribution, redeploy our token contract using the battle-tested ERC20 standard, and then resume distribution. We realise this may cause some confusion in the community, and we didn’t take this decision lightly, but we are currently doing our best to work with any website or Dapp that may be using our old contract address, to get them updated. In particular with Etherscan to re-validate our token contract with them. **The old MFT contract will remain in a locked state to ensure no malicious trades can happen using it.**

Again, we apologise to our amazing community for any confusion this causes around the MFT launch and thank them for all their understanding.

Sometimes there are setbacks on the path to freedom. During a difficult moment in the young American nation’s past, one of its poets asked, “O say, does that star-spangled banner yet wave?” The standard of a new era of privacy and freedom has been raised, and together we will keep it waving against all odds.

<iframe src="https://medium.com/media/4976a609c9cd0f3b360ec8220e031896" frameborder=0></iframe>


Source: https://blog.hifi.finance/important-mft-contract-redeployed-4f0b0bd8dc3b
