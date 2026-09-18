class CheckBox {
    constructor(page){
        this.page = page;
        this.checkboxmenu = page.getByRole('main').getByRole('link', { name: 'Check Box' });
        this.expandall = page.locator(".text-xs.text-blue-600.mr-3")
        this.homecheckbox = page.locator('(//button[@aria-label="Toggle"])[1]/following-sibling::div[contains(@class,"justify-center cursor-pointer")]');
        this.downloadsbox = page.locator('//span[text()="Excel File.doc"]/preceding-sibling::div[contains(@class,"justify-center cursor-pointer")]')
        this.collapseall = page.locator("button[class='text-xs text-blue-600']");
        this.selectedresult = page.locator("div.flex.flex-wrap.gap-2.text-green-600");
    }

    async checkboxGoto(){
        await this.checkboxmenu.click();
    }

    async expandAll(){
        await this.expandall.click();
    }

    async selectHome(){
        await this.homecheckbox.click();
    }

    async unselectHome(){
        await this.homecheckbox.click();
    }

    async selectDownloads(){
        await this.downloadsbox.click();
    }

    async collapseAll(){
        await this.collapseall.click();
    }
}
module.exports = CheckBox;