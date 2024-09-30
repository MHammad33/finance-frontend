import test, { expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("sign-in-button").click();
    await page.getByTestId("email-login").fill("hammad");
    await page.getByTestId("password-login").fill("1122");
    await page.getByTestId("login-button").click();
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
    const incomeChart = page.locator("text=Income Chart");
    const expensesChart = page.locator("text=Expenses Chart");

    await expect(incomeChart).toBeVisible();
    await expect(expensesChart).toBeVisible();
  });

  test("should display a budget section", async ({ page }) => {
    const budgetSection = page.locator("text=Budget Section");
    await expect(budgetSection).toBeVisible();
  });

  test("should display the budget section with correct content", async ({
    page
  }) => {
    const budgetSection = await page.locator("text=Budget Section");
    await expect(budgetSection).toBeVisible();

    const budgetAmount = budgetSection.locator(".budget-amount");
    await expect(budgetAmount).toHaveText("₨ 50,000");
  });

  test("should allow users to interact with budget section controls", async ({
    page
  }) => {
    const button = page.locator("button#update-budget");
    await expect(button).toBeVisible();
    await button.click();

    const updatedAmount = page.locator(".updated-budget-amount");
    await expect(updatedAmount).toHaveText("₨ 55,000");
  });

  test("should display loading state while fetching budget data", async ({
    page
  }) => {
    await page.route("/api/budget", route => route.abort());
    const budgetSection = page.locator("text=Budget Section");

    const loadingIndicator = budgetSection.locator(".loading-spinner");
    await expect(loadingIndicator).toBeVisible();
  });

  test("should display an error message if budget data fails to load", async ({
    page
  }) => {
    await page.route("/api/budget", route =>
      route.fulfill({
        status: 500,
        body: "Internal Server Error"
      })
    );

    const errorMessage = page.locator(".error-message");
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText("Failed to load budget data");
  });
});
