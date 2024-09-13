import { test, expect } from "@playwright/test";

test.describe("Basic Routing", () => {
	test("Home page loads successfully", async ({ page }) => {
		await page.goto("http://localhost:5173/");
		const homeHeader = page.locator("h1");
		await expect(homeHeader).toHaveText("Home page");
	});

	test("Login page loads successfully", async ({ page }) => {
		await page.goto("http://localhost:5173/login/");
		const homeHeader = page.locator("h1");
		await expect(homeHeader).toHaveText("Login page");
	});

	test("Signup page loads successfully", async ({ page }) => {
		await page.goto("http://localhost:5173/signup");
		const homeHeader = page.locator("h1");
		await expect(homeHeader).toHaveText("Signup page");
	});
});
