const {expect} = require('@playwright/test');
const testData = require("../test-data/elementsData.json")
const TextBox = require('../page-objects/Elements/TextBox');
import {test} from "../fixture/testfixture"
import CheckBox from '../page-objects/Elements/CheckBox';
import WebTables from '../page-objects/Elements/WebTables';
const {getRandomItem} = require('../utils/helpers')
test.describe("XQA Element Scenario Checking", ()=>{
    let textbox;
    let checkbox;
    let webtables;
    test.beforeEach(async ({practiseUrl})=>{
        textbox = new TextBox(practiseUrl);
        checkbox = new CheckBox(practiseUrl);
        webtables = new WebTables(practiseUrl);
    });
    test("TextBox Scenario- ", async()=>{
        await textbox.textboxGoto();
        const textdata = await getRandomItem(testData.textBox);
        await textbox.textboxFilldata(textdata);
        await expect(textbox.outputfullname).toContainText(textdata.fullname);
        await expect(textbox.outputemail).toContainText(textdata.email);
        console.log("Verified TextBox Scenario Successfully");
    });

    test("CheckBox Scenario", async()=>{
        const checkboxdata = testData.checkBox;
        await checkbox.checkboxGoto();
        await checkbox.expandAll();
        await checkbox.selectHome();
        
        await checkbox.unselectHome();
        
        await checkbox.selectDownloads();
        await checkbox.collapseAll();
        
        await expect(checkbox.selectedresult).toContainText(checkboxdata.selectedcheckbox);
        console.log("Finish")
        
    });

    test("WebTables Scenario - Search Record", async()=>{
        const webtablesdata = testData.webtablesearch;
        await webtables.webtableGoto();
        for (const data of webtablesdata.searchname){
            await webtables.searchHere(data);
        };
        await webtables.deleterecord(webtablesdata.deleterecord);
    });

    {test("WebTables Scenario - Delete Record", async()=>{
        const webtablesdata = testData.webtablesearch;
        await webtables.webtableGoto();
        await webtables.deleterecord(webtablesdata.deleterecord);
    });}

    test("WebTables Scenario - Add New Record", async()=>{
        const webtablesdata = testData.webtablesearch;
        await webtables.webtableGoto();
        await webtables.clickAddButton();
        await expect(await webtables.firstName).toBeVisible();
    });
});