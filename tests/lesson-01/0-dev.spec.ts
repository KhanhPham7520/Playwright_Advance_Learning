import { test, expect } from "playwright/test";

test('Go to homepage', async ({ page }) => {
    
    await page.goto('https://e-commerce.betterbytesvn.com/');

    await expect(page).toHaveTitle(/Automation test site/);
})