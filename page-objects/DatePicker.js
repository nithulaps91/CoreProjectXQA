class DatePicker {
    constructor (page){
        this.page = page;
        this.datepickermenu = page.getByRole('main').getByRole('link', {name: 'Date Picker'});
        this.selectdatepicker = page.locator("#datePickerMonthYearInput");
        this.dateandtimepicker = page.locator("#dateAndTimePickerInput");
    }
    async datepickerGoto(){
        await this.datepickermenu.click();
    }

    async selectDateFill(date){
        await this.selectdatepicker.fill(date);
    }

    async getDateValue(){
        return await this.selectdatepicker.inputValue();
    }

    async dateTimeFill(date){
        await this.dateandtimepicker.fill(date);
    }

    async getDateTimeValue(){
        return await this.dateandtimepicker.inputValue();
    }
}
module.exports = DatePicker;