# HIP 8 - Onboard Two New Collateral Rulesets

## Overview

This improvement proposal seeks the following:

- Approve Collateral Rulesets for Residential Construction Collateral and Horse Collateral
- Onboard $[RCC1](https://etherscan.io/address/0xb8a6f4d5402e437e3a784113a762488cabcd72c4) ([Residential Construction Collateral 1](https://etherscan.io/address/0xb8a6f4d5402e437e3a784113a762488cabcd72c4)) ERC-20 Token, a digital representation of collateral value which adheres to the Residential Construction Collateral Ruleset.
- Onboard $[HC1](https://etherscan.io/address/0xa4273c363dce9544ec838b0043ddc2060cea99d8) ([Horse Collateral 1](https://etherscan.io/address/0xa4273c363dce9544ec838b0043ddc2060cea99d8)) ERC-20 Token, a digital representation of collateral value which adheres to the Professionally Managed Racehorse Collateral Ruleset.
- Enter into a [Designation Agreement](https://github.com/hifi-finance/legal-docs/blob/main/HIP8/Hifi%20DAO%20Designee%20Agreement.pdf) with Mainframe Group, Inc. as HIFI DAO’s Designee, to represent the DAO’s interests overseeing all borrowing that adhere’s to these two Collateral Rulesets.
- Enter into an [Agreement of Association](https://github.com/hifi-finance/legal-docs/blob/main/HIP8/Hifi%20DAO%20Lending%20Partner%20Agreement.pdf) with Finance Ventures as a Lending Partner, to allow Finance Ventures to leverage Hifi’s on-chain liquidity for loans to their customers in accordance with these two Collateral Rulesets.
- Approve new System Wide Credit Limits for each ruleset.

## Details

Both $RCC1 and $HC1 ERC-20 tokens will have a fixed oracle value of $1 per token. Collateral tokens represent the value of the Lending Partner’s customer deposits. The Designee is responsible for validating valuations and minting new collateral tokens into existence. These tokens cannot be liquidated on-chain, and so appropriate provisions exist in the contracts for liquidation of the real-world assets.

A new system wide credit limit empowers the designee to legally enforce an upper limit on borrowing, even if technically it is possible to borrow more from the protocol. This is necessary to encourage healthier loan to value ratios and have a mechanism in place to balance the types of collateral HIFI token holders would like to lend against at any given time.

### $RCC1 Parameters:

- Collateral Ceiling: 10M
- System Wide Credit Limit: $5M
- 125% collateralization ratio (80% loan-to-value)

### $HC1 Parameters:

- Collateral Ceiling: 20M
- System Wide Credit Limit: $5M
- 166.67% collateralization ratio (60% loan-to-value)

### Residential Construction Ruleset

- **Property Requirements**
  - Residential properties only (single-family, multi-family, townhomes, condominiums).
  - Minimum property value of $500,000.
- **Borrower Qualifications**
  - No loans to individual borrowers, professionally managed business entities only.
  - The Borrower must agree to not grant any other party a security interest in the Collateral without the Lender's prior written consent.
  - Personal Guarantee: Borrowers with good credit who wish to pledge other personal assets as additional collateral may do so at an effective LTV ratio of 50% on these assets. These assets require an independent third-party appraisal or a recent purchase of at least a 25% ownership stake of the asset to determine their fair market value.
- **Loan Terms**
  - Loan origination fee of 1-2% of the loan amount.
  - Maximum Loan-to-Value (LTV) Ratio of 80%.
  - Loan term up to 24 months for construction, with an option for a 12-month extension, and should only extend through the construction phase of the project.
  - Maximum loan amount of $2 million per property.
  - Prepaid interest or Interest-only payments during construction, followed by principal and interest payments.
  - Approved, independent third-party appraisal required.
  - Collateral may include other land or property. Subject to the same appraisal and LTV requirements.
- **Disbursement**
  - Funds are disbursed in stages as construction milestones are met. The exact schedule can vary depending on the project, but the following draw schedule provides a guide for Lenders to adhere to:
    1. Initial draw: This covers the cost of permits, plans, and initial site preparation. It's usually a larger percentage of the total loan, around 10-20%.
    2. Foundation: Typically 10-15% of the loan.
    3. Framing: Including the roof, windows, and doors, 15-20% of the loan is disbursed.
    4. Rough mechanicals: Rough electrical, plumbing, and HVAC, 10-15% is released.
    5. Insulation and drywall: Insulation and drywall, another 10% of the loan is typically disbursed.
    6. Finishing: Interior finishes like trim, cabinets, and flooring, 10-15% is released.
    7. Final draw: The remaining 10-15% of the loan is disbursed after the final inspection and a certificate of occupancy is issued.
  - Before each draw is released, the lender sends an inspector or checks government records to verify that the work has been completed according to the plans and building codes. The borrower is responsible for submitting draw requests and providing any necessary documentation.
  - Interest is charged only on the amount of money that has been disbursed at each stage.
- **Lender Requirements**
  - As appropriate, perfect your security interest and establish priority over future creditors.
  - If there are existing liens on the collateral, consider requiring the borrower to obtain subordination agreements from the other creditors to ensure your priority position.
  - Documentation and Due Diligence:
    - Comprehensive loan application and supporting documentation.
    - Detailed project budget and timeline.
    - Contractor agreements and necessary permits.
    - Title insurance and hazard insurance.
    - Regular inspections and progress reports during construction.

### Professionally Managed Racehorse Ruleset

- Collateral Requirements:
  - Must be a racehorse or racehorse syndicate.
  - Can be either a single horse or multi-horse syndicate.
  - Approved, independent third-party appraisal required.
  - Profesional Management:
    - Minimum 3 years of experience in professional racehorse management.
    - Proven track record of successful horse training, racing, or breeding.
    - Financially stable.
  - Insurance coverage
    - Individual racehorses: required for all individual racehorses.
    - Multi-horse syndicates: required on any horses actively racing and the appraised value of the individual horse is above $200,000.
    - When possible, the Lending Partner must be named as an additional insured party on the policy.
- Borrower Requirements:
  - Provide quarterly updates on horse health and racing performance.
  - Provide updated appraisals upon significant events (e.g., major wins, injuries).
  - Permit Lending partners to exercise their right to inspect collateral annually.
  - Must agree to not grant any other party a security interest in the Collateral without the Lender's prior written consent.
- Loan Terms:
  - Loan origination fee of 1-2% of the loan amount.
  - At a minimum, require monthly interest payments and annual principal payments.
  - Loan-to-Value (LTV) Ratio
    - Individual racehorses: Lend up to 50% of the horse's fair market value (FMV).
    - Multi-horse syndicates: Lend up to 60% of the syndicate's net asset value (NAV).
  - Personal Guarantee: Borrowers with good credit who wish to pledge their personal assets as an additional layer of collateral backing the loan may do so at an effective LTV ratio of 50% on these additional assets. The assets included as a part of a personal guarantee require an independent third-party appraisal or a recent purchase of at least a 25% ownership stake to determine their fair market value.
  - Exclusions:
    - Geldings are expressly excluded from consideration as collateral as both an individual racehorse and as apart of a Multi-horse syndicate, due to their inability to contribute to breeding potential, which significantly impacts their long-term value assessment and liquidity considerations in the equine market.

### Designee Role

Consistent with other collateral requirements the DAO appointed designee will oversee and represent Hifi DAO’s interests in the transaction. This includes reviewing reports and updates provided by Lending Partners and ensuring compliance with DAO approved collateral rulesets. The key updates HIFI token holders should understand are that the Designee is responsible for both minting collateral tokens equal to the value of the lending partner’s customer deposits and for enforcing DAO set credit limits.

### Lending Partners

The lending partner is responsible for driving demand for protocol sourced liquidity, administering loans to borrowers, and liquidating assets when appropriate. Lending partners are required to keep accurate records and source independent third-party appraisals for accurately assessing the value of collateral.

## Legal Agreements

Upon this proposal’s success, Hifi DAO will also enter into a legally binding Agreement of Association with Finance Ventures, which can be viewed [here](https://github.com/hifi-finance/legal-docs/blob/main/HIP8/Hifi%20DAO%20Designee%20Agreement.pdf). And enter in to a legally binding Designation Agreement with Mainframe Group, Inc. which can be viewed [here](https://github.com/hifi-finance/legal-docs/blob/main/HIP8/Hifi%20DAO%20Lending%20Partner%20Agreement.pdf).

## Voting

Upon this proposal’s success, Hifi DAO will execute the Agreement of Association with Finance Ventures and the Designation Agreement with Mainframe Group, Inc. Hifi DAO will also execute the necessary variable changes to the Hifi Protocol’s Fintroller. and take the necessary technical steps to integrate $RCC1 & $HC1 Tokens into the Hifi Protocol with the set collateral ceilings and fixed oracle values. It is recommended that DAO members review the full agreement for a comprehensive understanding before casting their votes.

## Additional Resources

Additional details can be found in our recent blog posts:

- [RWA Framework Improvements](https://blog.hifi.finance/rwa-framework-improvements-c7b71b44b4ba)
- [Collateral Ruleset: Residential Construction](https://blog.hifi.finance/collateral-ruleset-residential-construction-3126c35ce4e9)
- [Collateral Ruleset: Professionally Managed Racehorses](https://blog.hifi.finance/collateral-ruleset-professionally-managed-racehorses-45871b4771bc)
- [Collateral Ruleset: Implementation Details](https://blog.hifi.finance/collateral-ruleset-implementation-details-fe5e9b281dee)

--
[EDIT] May 1, 2024 - Added Gelding Exclusion to Professionally Managed Racehorse Ruleset
