
# Progress Report: Breaking down our audit report

Progress Report: Breaking down our audit report

The finalized audit report is back from Quantstamp, and we have three items worth discussing: the use of decimals within the ERC-20 spec and within our protocol, flash loans and how they may impact us, and the elevated admin privileges that our multi-sig will have.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/hRkMODiPI2w" frameborder="0" allowfullscreen></iframe></center>

### ERC-20 Decimals

Quantstamp provided feedback around the potential misuse of the decimals property and the assumption that this property will remain constant for both underlying and collateral tokens. In building our protocol, we made the assumption that the underlying and collateral types would not have a variable number of decimals. We find this assumption to be reasonable and don’t foresee that any problems will arise.

### Flash Loans

Throughout the last several months, DeFi has been plagued with various exploits where smart people become rich for short periods of time. Because of the economic impact of this type of situation, it is important to guard against these exploits.

Flash loans can be a very powerful and useful tool. For example, we are leveraging flash loans in order to help one of our bots liquidate under collateralized positions. However, with the use of flash loans, we are being vigilant and aware of unfavorable situations and providing any protections needed to provide a seamless and positive user experience.

### Admin Role

When developing a trustless protocol, we basically want to have as little control as possible within the protocol. Our admin multi-sig can prevent users from deposition additional funds into the protocol, but cannot prevent users from pulling money out. This allows us to minimize the impact of any undesirable circumstance that may arise, without requiring users to trust those in charge of the admin multi-sig.

So, what are the next steps? While our lending protocol is ready for launch, we still need to finish implementing our user interface, implement the proxy contract, and release a private beta. To join our private beta, head to [our Discord server](https://discord.gg/mhtSRz6) and keep an eye out for updates.


Source: https://blog.hifi.finance/breaking-down-our-audit-report-20339e21431e
