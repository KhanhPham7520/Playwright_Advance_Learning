import { test as base, expect } from "@playwright/test";

type MyFixtures = {
 // loginPage : LoginPage;
};


export const test = base.extend<{ saveLogs: void }>({
  saveLogs: [async ({}, use) => {
    // nếu chưa login => login và lưu file authentication state
    console.log("Start automatic fixture");
    await use();

    console.log("End automatic fixture");
  
  },{auto: true, box : true}],
  
});

export {expect} from "@playwright/test";
