
import { test, expect } from "@playwright/test";

test.describe("The Internet login", () => {

  test.use({ baseURL: "https://the-internet.herokuapp.com" });

  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  // Test 1: Valid login
  test("valid user can log in", async ({ page }) => {

    await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
    await page.getByRole("textbox", { name: "Password" }).fill("SuperSecretPassword!");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page).toHaveURL(/\/secure/);
    await expect(page.locator("#flash")).toContainText(
      "You logged into a secure area!"
    );
  });

  // Test 2: Invalid password
  test("wrong password shows an error", async ({ page }) => {

    await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
    await page.getByRole("textbox", { name: "Password" }).fill("superSecretPassword!"); // Lowercase s is intentional

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#flash")).toContainText(
      "Your password is invalid!"
    );
  });

  // Test 3: Invalid username
  test("wrong username shows an error", async ({ page }) => {

    await page.getByRole("textbox", { name: "Username" }).fill("tomss");
    await page.getByRole("textbox", { name: "Password" }).fill("SuperSecretPassword!");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#flash")).toContainText(
      "Your username is invalid!"
    );
  });

});
