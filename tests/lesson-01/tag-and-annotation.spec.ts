import { test, expect } from "playwright/test";
import * as dotenv from 'dotenv';

// Load environment variables từ file .env.dev
const env = process.env.ENV || '';
dotenv.config({ path: `.env.${env}` });

test('01 - annotation', {
    annotation: {
        type: 'category',
        description: 'lesson-01'
    },
    tag: ["@annotation"]
}, async ({ page }, testInfo) => {

    const baseUrl = process.env.BASE_URL || '';
    console.log('Environment:', env); // Debug log
    await page.goto("https://e-commerce.betterbytesvn.com/");


    if (baseUrl.includes('dev')) {
        testInfo.annotations.push({
            type: 'environment',
            description: "Dev environment"
        });
    } else {
        testInfo.annotations.push({
            type: 'environment',
            description: "Production environment"
        });
    }
});

// test cần maintain và không cần chạy nữa
test.skip("Assert number of product 2", async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Chưa hỗ trợ chạy trên chronium');
    const baseUrl = process.env.BASE_URL || '';
    await page.goto(baseUrl);
});