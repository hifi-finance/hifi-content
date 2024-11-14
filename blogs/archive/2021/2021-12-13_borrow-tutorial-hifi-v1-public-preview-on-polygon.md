
# Borrow Tutorial: Hifi v1 Public Preview on Polygon

Borrow Tutorial: Hifi v1 Public Preview on Polygon

### How to borrow with the Hifi v1 Public Preview on Polygon.

<center><iframe width="560" height="315" src="https://www.youtube.com/embed/SAQF9Fca8D8" frameborder="0" allowfullscreen></iframe></center>

To borrow, navigate to the “Borrow” tab in the [Hifi Interface](https://app.hifi.finance).

1. First, make sure you have a wallet loaded with a few MATIC tokens (Polygon’s native asset), and some collateral (like WETH or WBTC) to deposit.

1. Next, connect your wallet. The page should reload with updated balances.

1. Now you can deposit your collateral: click on the available collateral option, enter the amount you would like to deposit and click on “Deposit collateral”.

1. Once your collateral deposit is complete, click on the market you would like to borrow from. Enter which amount you would like to borrow, and click on “Borrow < asset >”.

1. As soon as this transaction is finished, you will receive the amount you borrowed in your wallet.
> The first time you do this, you will need to set up the vault. This only has to be done once. Click on “Confirm” after the vault setup transaction was executed.

The fixed interest rate you receive when borrowing is determined by our built-in [automated market](http://docs.hifi.finance/protocol/technical-reference/market-making/hifi-pool). The more you borrow, the higher your interest rate may be. All loans in Hifi require over-collateralization with a greater value of collateral than debt. If you do not maintain a sufficient amount of collateral in your vault at all times, your vault may be liquidated.

Hifi allows you to borrow at a fixed rate for a fixed term, but you may repay early if you choose. Repaying early may result in you not receiving your original fixed rate, so give some consideration to how long you plan to have the loan when determining which maturity to borrow.

## Borrowing Explained

Behind the scenes, when you borrow on the Hifi protocol you are minting new hTokens against the collateral. The hTokens represent your fixed term debt. These debt tokens are then sold on Hifi’s built-in automated market maker (AMM), locking in your borrowing rate. This process is abstracted away when you use the Hifi interface.

At maturity, you must repay the debt by burning the hTokens you minted in order to reclaim your collateral. You may also repay your debt earlier than the maturity date. Interest rate changes may affect (positively or negatively) the amount of the borrowed asset you need to spend to obtain the needed hTokens. Be careful when repaying early as you may incur higher interest rates than paying at maturity.
> After maturity, if you don’t close your borrowing position, anyone can liquidate your position even if you’re over-collateralized. Make sure to monitor your vault closely and repay your loan before maturity.

## Example

To borrow USDC, as a user you have to mint hUSDC (for users of the Hifi Interface, this step is abstracted away). Assuming ETH is $4000:

1. You deposit 0.5 ETH of collateral (worth $2,000) in the system. The usual collateral ratio for ETH is 125%, so you are allowed to borrow up to 1,600 hUSDC from any of the available maturities.

1. You decide on Jan 31, 2022 to borrow 1,000 hUSDCMar22 (an hToken expiring on Mar 31, 2022).

1. You sell the hUSDCMar22 on Hifi’s AMM for 987.9 USDC.

Effectively, you have borrowed 987.9 USDC today and have 1,000 USDC debt, due in 3 months. In other words, you have borrowed at 5% APR.

After maturity is reached on Mar 31, 2021, you may return and pay the 1,000 USDC debt and get back your collateral.


Source: https://blog.hifi.finance/borrow-tutorial-hifi-v1-public-preview-on-polygon-b6d1ae3f72d7
