class Windows {
    constructor (page) {
        this.page = page;
        this.windowmenu = page.getByRole('main').getByRole('link', {name: 'Browser Windows'});
        this.newtabbutton = page.getByRole('button', {name: 'New Tab'});
        this.newwindowbutton = page.getByRole('button', {name: 'New Window'});
    }

    async windowsGoto(){
        await this.windowmenu.click();
    };
    async openNewTab(){
        const newPagePromise = this.page.waitForEvent('popup');
        await this.newtabbutton.click();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState();
        return newPage;
    };
    async openNewWindow(){
        const newPagePromise = this.page.waitForEvent('popup');
        await this.newwindowbutton.click();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState();
        return newPage;
    };
};
module.exports = Windows;