class TextBox{
    constructor(page){
        this.page = page;
        this.textboxmenu = page.getByRole('main').getByRole('link', { name: 'Text Box' });
        this.fullname = page.getByRole("textbox", {name: 'Full Name'});
        this.email = page.getByRole("textbox", {name: 'Email'});
        this.currentaddress = page.getByRole("textbox", {name: 'Current Address'});
        this.permanantaddress = page.getByRole("textbox", {name: 'Permanent Address'});
        this.submitbtn = page.getByRole('button', {name: 'Submit'});

        this.outputfullname = page.locator("#name");
        this.outputemail = page.locator("#email");
    }

    async textboxGoto(){
        await this.textboxmenu.click();
    }

    async textboxFilldata(textdata){
        await this.fullname.fill(textdata.fullname);
        await this.email.fill(textdata.email);
        await this.currentaddress.fill(textdata.currentaddress);
        await this.permanantaddress.fill(textdata.permanantaddress);
        await this.submitbtn.click();
    }
}
module.exports = TextBox;