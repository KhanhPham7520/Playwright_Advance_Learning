import { test, expect } from "playwright/test";


test('Go to homepage', async ({ page }) => {
    const baseUrl = process.env.BASE_URL || '';
    await page.goto(baseUrl);
    console.log("Base url là : " + baseUrl)
})