import { test as base } from "@playwright/test";


export const test = base.extend<{ conf: any }>({
    conf: async ({ }, userInfo, testInfo) => {
        const testFilePath = testInfo.file;
        let caseId = testInfo?.tag?.[0];

        if(!caseId) {
            throw new Error("Can not determine caseId", testInfo)
        }
    }
})