const {expect} = require('@playwright/test');
const testData = require("../test-data/elementsData.json")
const PractiseForm = require('../page-objects/Forms/PractiseForm');
import {test} from "../fixture/testfixture";

test("Student Registration Form", async({practiseUrl})=>{
    const studentform = new PractiseForm(practiseUrl);

    await studentform.formGoto();
    const registrationdata = testData.studentdata;
    
    await studentform.fillRegistrationForm(registrationdata);
    await studentform.fillDateofBirth(registrationdata);
    await studentform.uploadFile(registrationdata);
    await studentform.fillSomeSubmit(registrationdata);
    await expect(studentform.submitverify).toHaveText("Thanks for submitting the form");
});