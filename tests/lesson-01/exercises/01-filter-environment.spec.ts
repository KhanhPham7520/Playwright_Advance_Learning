import { test, expect } from "playwright/test";

test('Go to Home page', async ({page}) => {
    const baseUrl = process.env.BASE_URL || '';
    await page.goto(baseUrl)  ;
});