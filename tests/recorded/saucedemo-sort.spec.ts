import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('div').filter({ hasText: 'Accepted usernames are:' }).nth(4).click();
  await page.locator('body').press('ControlOrMeta+c');
  await page.locator('[data-test="username"]').click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="item-2-title-link"]')).toBeVisible();
});