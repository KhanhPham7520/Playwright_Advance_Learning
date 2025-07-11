import { test, expect } from "playwright/test";

test('Go to homepage', async ({ page }) => {

    // console.log(process.env.BASE_URL);

    const baseUrl = process.env.BASE_URL || '';

    await page.goto(baseUrl);

    // await expect(page).toHaveTitle(/Automation test site/);
});