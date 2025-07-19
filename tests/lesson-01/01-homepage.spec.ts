import { test, expect } from "playwright/test";
import fs from 'fs';
import path from "path";
import { readConfig } from "../../utils/config";

test.describe('assertion', async () => {

    let testConfig: any;

    test.beforeEach(() => {
        testConfig = readConfig(); // lặp lại vòng code này cho mỗi test case
    });

    test("1. Assert number of product", async ({ page }) => {
        const baseUrl = (process.env.BASE_URL || '').trim();
        await page.goto(baseUrl);

        const products = await page.locator("//li[contains(@class,'product')]").all();
        console.log("Danh sách sản phẩm là : " + products.length);

        expect(products.length).toEqual(testConfig.home_page.number_of_product);
    });

    test("2. Assert number of product", async ({ page }) => {
        const baseUrl = (process.env.BASE_URL || '').trim();
        await page.goto(baseUrl);

        const products = await page.locator("//li[contains(@class,'product')]").all();
        console.log("Danh sách sản phẩm là : " + products.length);

        expect(products.length).toEqual(testConfig.home_page.number_of_product);
    });

});
