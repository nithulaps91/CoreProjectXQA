class PractiseForm{
    constructor (page) {
        this.page = page;
        this.formmenu = page.getByRole("main").getByRole('link', {name: 'Practice Form'})
        this.firstname = page.locator("#firstName");
        this.lastname = page.locator("#lastName");
        this.studentemail = page.locator("#userEmail");
        this.gender = (gender)=> page.getByRole("radio", {name: gender, exact: true});
        this.mobile = page.locator("#userNumber");
        this.dateofbirth = page.locator("#dateOfBirthInput");
        this.day = page.locator(".react-datepicker__day");
        this.month = page.locator(".react-datepicker__month-select");
        this.year = page.locator(".react-datepicker__year-select");
        this.hobbies = page.getByLabel("Music");
        this.hobbies2 = page.getByLabel("Sports");
        this.pictureupload = page.locator("#uploadPicture");
        this.address = page.locator("#currentAddress");
        this.selectstate = page.getByLabel("State");
        this.selectcity = page.getByLabel("City");
        this.submitbtn = page.locator("#submit");
        this.submitverify = page.locator(".font-semibold.text-lg");

    }

    async formGoto(){
        await this.formmenu.click();
    }

    async fillRegistrationForm(registrationdata){
        await this.firstname.fill(registrationdata.firstname);
        await this.lastname.fill(registrationdata.lastname);
        await this.studentemail.fill(registrationdata.studentemail);
        await this.gender(registrationdata.gender).check();
        await this.mobile.fill(registrationdata.mobile);
    }

    async fillDateofBirth(registrationdata){
        await this.dateofbirth.fill(registrationdata.dob);
    }

    async uploadFile(registrationdata){
        await this.hobbies.check();
        await this.hobbies2.check();
        await this.pictureupload.setInputFiles(registrationdata.uploadfile);
    }

    async fillSomeSubmit(registrationdata){
        await this.address.fill(registrationdata.currentaddress);
        await this.selectstate.selectOption(registrationdata.state);
        await this.selectcity.selectOption(registrationdata.city);
        await this.submitbtn.click();
    }
}
module.exports = PractiseForm;