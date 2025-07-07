import { test, expect } from "playwright/test";

test('01 - annotation', {
    annotation: {
        type: 'category',
        description: 'lesson-01'
    },
    tag: ["@annotation"]
}, async ({ page }, testInfo) => {

    const baseUrl = process.env.BASE_URL || 'dev';
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


test("Assert number of product 1", {
    tag: ["@smoke"]
}, async ({ page, browserName }) => {
    const baseUrl = process.env.BASE_URL || '';
    await page.goto(baseUrl);

    const products = await page.locator("//li[contains(@class,'product')]").all();
    console.log("Danh sách sản phẩm là : " + products.length);
});

// test cần maintain và không cần chạy nữa
test.skip("Assert number of product 2", async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Chưa hỗ trợ chạy trên chronium');
    const baseUrl = process.env.BASE_URL || '';
    await page.goto(baseUrl);

    const products = await page.locator("//li[contains(@class,'product')]").all();
    console.log("Danh sách sản phẩm là : " + products.length);
});

// test chưa hỗ trợ chạy trên chromnium (trong project thực tế ít khi sử dụng fixme)
test.fixme("Assert number of product 3", async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Chưa hỗ trợ chạy trên chronium');
    const baseUrl = process.env.BASE_URL || '';
    await page.goto(baseUrl);

    const products = await page.locator("//li[contains(@class,'product')]").all();
    console.log("Danh sách sản phẩm là : " + products.length);
});


