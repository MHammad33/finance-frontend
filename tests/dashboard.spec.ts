import test, { expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("sign-in-button").click();
    await page.getByTestId("email-login").fill("ali@gmail.com");
    await page.getByTestId("password-login").fill("1122");
    await page.getByTestId("login-button").click();
    await page.waitForURL("/dashboard");
  });

  test("should display dashboard overview header", async ({ page }) => {
    const header = page.locator("h1.text-3xl");
    await expect(header).toHaveText("Dashboard Overview");
  });

  test("should display recent transactions section", async ({ page }) => {
    const recentTransactions = await page.locator(
      'section:has-text("Recent Transactions")'
    );
    await expect(recentTransactions).toBeVisible();
  });

  test("should display income and expenses charts", async ({ page }) => {
    const incomeChart = page.locator("text=Income Over Time");
    const expensesChart = page.locator("text=Expenses Breakdown");

    await expect(incomeChart).toBeVisible();
    await expect(expensesChart).toBeVisible();
  });

  test("should display a budget section", async ({ page }) => {
    const budgetSection = page.locator("text=Budget Overview");
    await expect(budgetSection).toBeVisible();
  });

  test("should display the budget section with correct content", async ({
    page
  }) => {
    const budgetSection = await page.locator("text=Budget Overview");
    await expect(budgetSection).toBeVisible();

    const budgetAmount = budgetSection.locator(".budget-amount");
    await expect(budgetAmount).toHaveText("₨ 70,000");
  });
});
