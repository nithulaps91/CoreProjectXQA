import {test} from "../fixture/testfixture";
import NestedFrames from "../page-objects/NestedFrames";
const {expect} = require('@playwright/test');

test.describe('Nest IFrames', ()=>{
    let nestedobject;
    test.beforeEach(async({practiseUrl})=>{
        nestedobject = new NestedFrames(practiseUrl);
    })
    test("Verify", async()=>{
        await nestedobject.nestedGoto();
        await expect(nestedobject.parenttext).toBeVisible();

        await expect(nestedobject.childtext).toBeVisible();

        const parentText = await nestedobject.parenttext.textContent();
        const childText = await nestedobject.childtext.textContent();

        await expect(parentText).toContain('Parent');
        await expect(childText).toContain('Child');
    })
})