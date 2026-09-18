class DynamicObject{
    constructor (page) {
        this.page = page;
        this.dynamicmenu = page.getByRole('main').getByRole('link', {name: 'Dynamic Properties'});
        this.enableafterbtn = page.getByRole('button', {name: 'Enabled'});
        this.colorchangebtn = page.getByRole('button', {name: 'Color Change'});
        this.afterappearbtn = page.getByRole('button', {name: 'Visible'});
    }

    async dynamicMenu(){
        await this.dynamicmenu.click();        
    }

    async waitForEnableButton() { 
        await this.enableafterbtn.waitFor({ state: 'visible' });
    }
    async waitForColorChange() {
        await this.colorchangebtn.waitFor({ state: 'visible' });
    }
    async waitForVisibleButton() {
        await this.afterappearbtn.waitFor({ state: 'visible' });
    } 
}
module.exports = DynamicObject;