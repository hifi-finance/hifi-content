# HIP 4 - Administrative Updates: Voting Period, Proposal Threshold

# Summary

The purpose of this proposal is twofold:

1. To adjust the voting period for proposals within the DAO from the current duration of 2 days to a more suitable duration of 5 days.
2. To raise the proposal threshold from the present requirement of 2.83K Hifi tokens to a more significant requirement of 50K Hifi tokens.

---

# Motivation

The proposed changes aim to improve the governance structure by ensuring broader participation and more substantial stakeholder input in decision-making. Extending the voting period will provide token holders with more time to evaluate proposals, and the higher threshold will require a more substantial stake in the project for proposal submissions, reducing potential spam.

---

# Specification

**1. Change to Voting Period:**

Set the `votingPeriod` parameter in the GovernorBravo V2 contract to a 5-day (432000 seconds) period, currently at a 2-day (172800 seconds) period.

**2. Change to Proposal Threshold:**

Set the `proposalThreshold` parameter in the GovernorBravo V2 contract to a requirement of 50,000 Hifi tokens, currently at 2,830 Hifi tokens.

---

# Action Items

Upon successful voting on this proposal, the GovernorBravo V2 contract should be updated to reflect the changes mentioned above.

This proposal will go live in the next 24 hours and this post will be updated with a direct link to the proposal on tally.
