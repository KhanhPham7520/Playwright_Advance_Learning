import { test, expect } from "playwright/test";


test('Go to homepage', async ({ page }) => {

    const baseUrl = process.env.BASE_URL || '';
    const expectedTitle = 'E-commerce site for automation testing – E-commerce site for automation testing'

    await page.goto(baseUrl);

    console.log("Base url là : " + baseUrl)

    await expect(page).toHaveTitle(expectedTitle);
})