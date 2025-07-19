import { test, expect } from "playwright/test";

test('Go to homepage', async ({ page }) => {
    
    const baseUrl = process.env.BASE_URL || '';

    await page.goto(baseUrl);

    if(baseUrl.includes("dev")){
        await expect(page).toHaveTitle(/E-commerce site for automation testing/);
    }else {
        await expect(page).toHaveTitle(/Automation test site/);
    }
})