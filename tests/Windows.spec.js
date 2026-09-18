import {test} from "../fixture/testfixture";
import Windows from "../page-objects/Windows";
const {expect} = require('@playwright/test');

test.describe("Browser Windows", ()=>{
    let browserwindows;
    test.beforeEach(async ({practiseUrl})=>{
        browserwindows = new Windows(practiseUrl);
        await browserwindows.windowsGoto();
    })
    test("NewTab", async()=>{
        const newPage = await browserwindows.openNewTab();
        await expect(newPage).toBeTruthy();
    })
    test("New Window", async()=>{
       const newPage = await browserwindows.openNewWindow();
       await expect(newPage).toBeTruthy();
    })
})
