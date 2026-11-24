import { test, expect } from "@playwright/test";

test.describe("The Internet login - Negative scenarios", () => {
  test("wrong password shows an error", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.getByRole("textbox", { name: "Username" }).fill("tomsmith");
    await page.getByRole("textbox", { name: "Password" }).fill("superSecretPassword!");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Your password is invalid!")).toBeVisible();
  });

  test("wrong username shows an error", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");

    await page.getByRole("textbox", { name: "Username" }).fill("tomss");
    await page.getByRole("textbox", { name: "Password" }).fill("SuperSecretPassword!");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByText("Your username is invalid!")).toBeVisible();
  });
});
