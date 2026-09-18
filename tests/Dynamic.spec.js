import {test} from "../fixture/testfixture.js";
const {expect} = require('@playwright/test');
const DynamicObject = require('../page-objects/Elements/DynamicObject');

test.describe('Dynamic Properties', ()=>{
    let dynamic;
    test.beforeEach(async ({practiseUrl})=>{
        dynamic = new DynamicObject(practiseUrl);
        await dynamic.dynamicMenu();
    });

    test("Verify enable after 3.5 seconds", async()=>{
        await dynamic.waitForEnableButton();
        await expect(dynamic.enableafterbtn).toBeEnabled();
    });
    test("Verify Change Color", async()=>{
        await dynamic.waitForColorChange();
        await expect(dynamic.colorchangebtn).toBeVisible();
    });
    test("Verify Button Visible After Appear", async()=>{
        await dynamic.waitForVisibleButton();
        await expect(dynamic.afterappearbtn).toBeVisible();
    })
})