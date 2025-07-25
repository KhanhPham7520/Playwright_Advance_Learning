import { test as base, expect } from "@playwright/test";
export {expect} from "@playwright/test";

export const test = base.extend <{demo: string}> ({
    demo : async({page}, use) => {
        console.log("Start demo");
        await use("demo fixture");
        console.log("end demo");
    },
});

