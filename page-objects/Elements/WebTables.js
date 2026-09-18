class WebTables{
    constructor (page) {
        this.page = page;
        this.webtablemenu = page.getByRole('main').getByRole('link', { name: 'Web Tables' });
        this.search = page.getByPlaceholder("Type to search...");
        this.delete = page.locator("#delete-record-1");
        this.addbutton = page.locator("#addNewRecordButton");
        this.firstName = page.locator('#firstName');
    }

    async webtableGoto(){
        await this.webtablemenu.click();
    }

    async searchHere(data){
        await this.search.fill(data);
    }

    async deleterecord(name){
        const row = this.page.getByRole('row').filter({ hasText: name });
        await row.getByRole('button', { name: 'Delete' }).click();
    }

    async clickAddButton(){
        await this.addbutton.click();
    }
}
module.exports = WebTables;