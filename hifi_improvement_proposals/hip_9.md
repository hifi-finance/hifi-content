# HIP 9 - Approve Medical Equipment Collateral Ruleset

## Overview

This improvement proposal seeks to:

- Approve a Collateral Ruleset for Medical Equipment
- Onboard [$MEC1](https://etherscan.io/address/0x4e44b82d6fb5e341a4b83501b04ca683ae6de1f8) ERC-20 Token, a digital representation of collateral value which adheres to the [Medical Equipment Collateral Ruleset](https://blog.hifi.finance/collateral-ruleset-medical-equipment-1cf3d1c404e7)
- Approve a new System Wide Credit Limit for the Medical Equipment ruleset

## Details

The $MEC1 ERC-20 token will have a fixed oracle value of $1 per token. Collateral tokens represent the value of the Lending Partner's customer deposits. The Designee is responsible for validating valuations and minting new collateral tokens into existence. These tokens cannot be liquidated on-chain, and appropriate provisions exist in the contracts for liquidation of the real-world assets. The corresponding $MEC price feed can be found [here](https://etherscan.io/address/0xb33665b4ec08573a4b460b46e85b0f65af996b0e).

### $MEC1 Parameters:

- Collateral Ceiling: 3M
- System Wide Credit Limit: $1M
- 125% collateralization ratio (80% loan-to-value)

### Medical Equipment Financing Ruleset

- **Equipment Eligibility**
  - New and used medical equipment
  - FDA-approved (if applicable)
  - Minimum equipment value of $10,000
  - Maximum equipment age of 5 years for used equipment
  - Eligible equipment types include imaging equipment, surgical equipment, patient monitoring systems, laboratory equipment, dental equipment, optometry equipment, telemedicine technology, and admin equipment
- **Borrower Qualifications**
  - Minimum 2 years in business for established practices
  - For new practices, primary healthcare provider must have at least 5 years of experience
- **Loan Terms**
  - Loan amounts from $25,000 to $500,000
  - Maximum Loan-to-Value (LTV) Ratio of 80%
  - Down payment recommendation: 10% for new equipment, 15% for used equipment
- **Collateral and Security**
  - Financed equipment serves as primary collateral
  - Personal guarantee required for individual borrowers or key stakeholders in smaller practices
  - Additional collateral may be required for high-value equipment
- **Insurance Requirements**
  - Comprehensive insurance coverage on the equipment, with the lender named as loss payee
  - General liability insurance for the medical practice
- **Documentation Requirements**
  - Equipment quote or invoice from an authorized dealer
- **Repayment Terms**
  - Monthly payments
- **Equipment Considerations**
  - Lender reserves the right to inspect the equipment
  - Borrower must maintain the equipment according to manufacturer specifications
- **Default and Recovery**
  - Default triggered by missed payments, breach of loan terms, or loss of necessary licensing
  - Lender reserves the right to repossess equipment in case of default
- **Reporting Requirements**
  - Notification of significant changes in business structure or ownership
  - Immediate notification of any regulatory issues or loss of applicable licenses

## Designee Role

Please note, Mainframe Group, Inc. continues to act in its capacity as HIFI DAO’s Designee. The DAO appointed designee will oversee and represent Hifi DAO's interests in the transaction. This includes reviewing reports and updates provided by Lending Partners and ensuring compliance with DAO approved collateral rulesets. The Designee is responsible for both minting collateral tokens equal to the value of the lending partner's customer deposits and for enforcing DAO set credit limits.

## Lending Partners

Please note Finance Ventures continues to act in its capacity as a lending partner. The lending partner is responsible for driving demand for protocol sourced liquidity, administering loans to borrowers, and liquidating assets when appropriate. Lending partners are required to keep accurate records and source independent third-party appraisals for accurately assessing the value of collateral.

## Legal Agreements

No new legal agreements are necessary for this HIP. Existing agreements, cover the scope of this new collateral ruleset once approved by governance. For your reference, here are links to our existing [Designation Agreement ](https://github.com/hifi-finance/legal-docs/blob/main/HIP8/HIP%208%20Hifi%20DAO%20Designee%20Agreement%20Redacted.pdf) and [Agreement of Association](https://github.com/hifi-finance/legal-docs/blob/main/HIP8/HIP%208%20Hifi%20DAO%20Lending%20Partner%20Agreement%20Redacted.pdf).

## Voting

Upon this proposal's success, Hifi DAO will execute the necessary variable changes to the Hifi Protocol's Fintroller and take the necessary technical steps to integrate $MEC1 Tokens into the Hifi Protocol with the set collateral ceiling and fixed oracle value. It is recommended that DAO members review the full agreement for a comprehensive understanding before casting their votes.

The proposal is expected to go live Tuesday, September 24, 2024 with _voting expected to begin on **Thursday**, September 26, 2024._

## Additional Resources

Additional details can be found in our recent blog post:

- [Collateral Ruleset: Medical Equipment](https://blog.hifi.finance/collateral-ruleset-medical-equipment-1cf3d1c404e7)
