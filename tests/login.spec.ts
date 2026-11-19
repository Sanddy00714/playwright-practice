import { test, expect } from "@playwright/test";

test("standard user can log in", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText("Products");
});

test("logout test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[id="react-burger-menu-btn"]').click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
  await expect(page).toHaveURL("https://www.saucedemo.com/");
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});

test("locked out user sees an error", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator('[data-test="username"]').fill("locked_out_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="error"]')).toContainText(
    "Sorry, this user has been locked out.",
  );
});

test("add to cart and checkout test", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill("John");
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill("Doe");
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill("12345");
  await page.locator('[data-test="continue"]').click();
  await expect(page.locator('[data-test="finish"]')).toBeVisible();
});
