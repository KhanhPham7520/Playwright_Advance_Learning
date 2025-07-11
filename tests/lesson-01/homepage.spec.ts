import { test, expect } from "playwright/test";
import fs from 'fs';
import path from 'path';
require('dotenv').config({ path: '.env.dev' });

test.describe('assertion', async () => {

    // let testConfig: any;

    // test.beforeEach(() => {
    //     testConfig = readConfig(); // lặp lại vòng code này cho mỗi test case
    // });

    test("1. Assert number of product", async ({ page }) => {
        // Đọc env
        const env = (process.env.ENV || 'dev').trim();

        // cwd = current working directory
        const dataFilePath = path.join(process.cwd(), `data/${env}.json`);

        // Đọc file jsonObject
        const jsonObject = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

        const baseUrl = process.env.BASE_URL!;
        await page.goto(baseUrl);

        const products = await page.locator("//li[contains(@class,'product')]").all();

        console.log("Danh sách sản phẩm là : " + products.length);

        //production -> 7 items && dev -> 9 items
        expect(products.length).toEqual(jsonObject.home_page.number_of_product);
    });

});