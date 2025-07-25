import { test, expect, Page } from "playwright/test";
import { readConfig } from "../../utils/config";

test.describe('', async () => {

    let testConfig : any;
    test.beforeEach(() => {
        testConfig = readConfig();
    });

    test('Verify home page displayed successfully', {
        annotation : [
        {
            type : "test_id",
            description : "HOME_001"
        }, 
        {
            type : "module_id",
            description : "HOME",
        }
        ],
        tag : ["@HOME_001", "@HOME", "@ui"]
    }, async ({ page }) => {

        const baseUrl = (process.env.BASE_URL || '').trim();
        const expectedTitle = testConfig?.home_page?.title;
        const expectedHeading = testConfig?.home_page?.noProducts;
        
        await test.step("01. Navigate to destination page", async () => {
            await page.goto(baseUrl);   
        });

        await test.step("02. Verify tile of page", async () => {
            await expect(page).toHaveTitle(expectedTitle)
        })

        await test.step("03. Verify that heading page displayed correctly", async () => {
          //  await expect(page).to
        });

        await test.step("04. Verify that number of product displayed correctly", async () => {
           // await expect(page)
        });

    })

})

