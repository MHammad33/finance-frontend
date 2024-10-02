import { Page } from "@playwright/test";

const login = async (page: Page) => {
  await page.getByTestId("sign-in-button").click();
  await page.getByTestId("email-login").fill("ali@gmail.com");
  await page.getByTestId("password-login").fill("1122");
  await page.getByTestId("login-button").click();
  await page.waitForURL("/dashboard");
};

export default { login };
