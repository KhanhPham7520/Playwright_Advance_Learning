import { test as base } from "@playwright/test";

type Account = {
    username: string;
    password: string;
}

export const test = base.extend<{}, {account: Account}>({
    account : [async ({browser}, use, workerInfo) => {
        console.log("Start fixture account");
        await use({username : "abc", password : "xyz"});
        console.log("End fixture account");
    },
    {scope: 'worker'}]
});