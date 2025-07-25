import { test, expect } from "playwright/test";

test('Go to homepage', async ({ page, context }) => {
    
    await page.goto("https://e-commerce.betterbytesvn.com/");

    const cookies = await context.cookies();
    console.log(cookies);
    await context.newPage();

    
    

})