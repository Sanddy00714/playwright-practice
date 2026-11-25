import { test, expect } from "@playwright/test";

test.describe("Sauce Demo sorting", () => {
  test.use({ baseURL: "https://www.saucedemo.com" });

  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.locator('[data-test="username"]').fill("standard_user");
    await page.locator('[data-test="password"]').fill("secret_sauce");
    await page.locator('[data-test="login-button"]').click();

    await expect(page.locator('[data-test="title"]')).toHaveText("Products");
  });

  // Test A: Verify products are sorted by price  high to low
  test("price high to low sorts products by price", async ({ page }) => {

    await page.locator('[data-test="product-sort-container"]').selectOption("hilo");

    const priceLocator = page.locator('[data-test="inventory-item-price"]');

    await expect(priceLocator).toHaveCount(6);

    const priceTexts = await priceLocator.allTextContents();

    const prices = priceTexts.map((text) => Number(text.replace("$", "")));

    const expected = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(expected);
  });

  // Test B: Verify products are sorted by price
  test("price low to high sorts products by price", async ({ page }) => {
    await page
      .locator('[data-test="product-sort-container"]')
      .selectOption("lohi");

    const priceLocator = page.locator('[data-test="inventory-item-price"]');

    await expect(priceLocator).toHaveCount(6);

    const priceTexts = await priceLocator.allTextContents();

    const prices = priceTexts.map((text) => Number(text.replace("$", "")));

    const expected = [...prices].sort((a, b) => a - b);


    expect(prices).toEqual(expected);
  });

  // Test C: Add cheapest product to cart
  test("cheapest product can be added to the cart", async ({ page }) => {
    await page
      .locator('[data-test="product-sort-container"]')
      .selectOption("lohi");

    // Get the first product card
    const firstCard = page.locator('[data-test="inventory-item"]').first();

    await expect(
      firstCard.locator('[data-test="inventory-item-name"]'),
    ).toHaveText("Sauce Labs Onesie");

    await firstCard.getByRole("button", { name: "Add to cart" }).click();

    // Verify cart badge shows 1
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      "1",
    );

    await page.locator('[data-test="shopping-cart-link"]').click();

    // Verify Sauce Labs Onesie is in the cart
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText(
      "Sauce Labs Onesie",
    );
  });
});
