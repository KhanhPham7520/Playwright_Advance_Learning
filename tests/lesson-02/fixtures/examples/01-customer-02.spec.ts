import { test } from "../01-custom-02";

test.describe("Fixtures - custom", async () => {
    // before
    test('test 1', async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin/");
        console.log("Inside test 1");
    });

    test('test 2', async ({ page }) => {
        await page.goto("https://pw-practice-dev.playwrightvn.com/wp-admin/");
        console.log("Inside test 2");
    });
});