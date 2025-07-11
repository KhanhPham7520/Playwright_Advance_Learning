import { test, expect } from "playwright/test";

test('Go to homepage', async ({ page }) => {

    const baseUrl = process.env.BASE_URL || '';
    const expectedTitle = /E-commerce site/

    await page.goto(baseUrl);

    console.log("Base url => " + baseUrl)

    await expect(page).toHaveTitle(expectedTitle);
})