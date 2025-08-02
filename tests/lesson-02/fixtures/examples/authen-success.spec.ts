import test from "@playwright/test";

test.describe("Suite for authentication success", async () => {
    test("Verify homepage displayed successfully", {
        annotation: [
            {
                type: "test_id",
                description: "HOME_001"
            },
            {
                type: "module_id",
                description: "HOME"
            }
        ],
        tag: ['@HOME_001', "HOME", "@UI"]
    }, async ({ page }) => {
        // console.log(conf);

    })
})
