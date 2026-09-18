class NestedFrames{
    constructor (page) {
        this.page = page;
        this.nestedframemenu = page.getByRole('main').getByRole('link', {name: 'Nested Frames', exact: true});
        this.parentframe = page.frameLocator("#frame1");
        this.childframe = this.parentframe.frameLocator("iframe");

        this.parenttext = this.parentframe.getByText("Parent Iframe");
        this.childtext = this.childframe.getByText("Child Iframe");
    }
    async nestedGoto(){
        await this.nestedframemenu.click();
    }
};
module.exports = NestedFrames;