import { test } from "../03-worker-scoped"

test.describe("Fixture Test 1 - worker scope", async () => {
    test('Test 1', async ({ account, isMobile }) => {
        test.skip(isMobile === true);
        console.log(account);

    });

    test('Test 2', async ({ account, browserName, browser }) => {
        test.skip(browserName === 'chromium');
        console.log(account);
    })
})