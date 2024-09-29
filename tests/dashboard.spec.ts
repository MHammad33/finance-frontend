import test, { expect } from "@playwright/test";

test.describe("Dashboard", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("demo test", () => {
    expect("1").toBe("1");
  });
});
