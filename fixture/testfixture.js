const { test: base } = require('@playwright/test');
import dotenv from 'dotenv';
dotenv.config();

export const test = base.extend({
    practiseUrl: async ({page}, use)=>{
        await page.goto(process.env.URL);
        await use(page);
    }
});
