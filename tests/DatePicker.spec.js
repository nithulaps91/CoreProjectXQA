import {test} from "../fixture/testfixture"
import DatePicker from "../page-objects/DatePicker";
const {expect} = require("@playwright/test");
const testData = require("../test-data/elementsData.json")
test.describe("Date Picker", ()=>{
    let datepickerobject;
    test.beforeEach(async({practiseUrl})=>{
        datepickerobject = new DatePicker(practiseUrl);
        await datepickerobject.datepickerGoto();
    })
    test("Fill Select Date and Date and Time", async()=>{
        await datepickerobject.selectDateFill(testData.datePicker.date);
        const selectedDate = await datepickerobject.getDateValue();
        await expect(selectedDate).toBe(testData.datePicker.date);
   
        await datepickerobject.dateTimeFill(testData.dateAndTimePicker.dateTime);
        const selectDateTime = await datepickerobject.getDateTimeValue();
        await expect(selectDateTime).toBe(testData.dateAndTimePicker.dateTime);
    }); 
})