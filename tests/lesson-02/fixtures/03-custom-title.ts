import { test as base, expect } from "@playwright/test";

export const test = base.extend<{
    innerFixture: string
}>({
    innerFixture: [async ({ }, use, testInfo) => {
        // nếu chưa login => login và lưu file authentication state
        console.log("Start automatic fixture");
        await use("Inner fixture value");
        console.log("End automatic fixture");
    }, { title: "My custom Name" }],
});

export { expect } from "@playwright/test";
