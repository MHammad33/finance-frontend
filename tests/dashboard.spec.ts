import test, { expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
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
});
