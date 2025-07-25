import { test } from "./01-custom-01";

test.describe("Test custom fixture", async () => {
    
    // before
    test('custom test 1', async ({ page }) => {
        console.log("Inside test 1");
        
    });
});