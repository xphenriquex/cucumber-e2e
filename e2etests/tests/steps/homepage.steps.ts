import { Given, When, Then, setDefaultTimeout, Before, After } from "@cucumber/cucumber"
import { Browser, BrowserContext, chromium, Page } from "playwright"

setDefaultTimeout(1000 * 60 *2);

let browser: Browser;
let bCtx: BrowserContext;
let page: Page;

Before(async function() {
    browser = await chromium.launch({
        headless: false, channel: "chrome", args:['--start-maximized']
    });
    bCtx = await browser.newContext({ 
        viewport: null, javaScriptEnabled: true
    });
    page = await bCtx.newPage(); 
})

Given('User is on home page', async function() {
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.locator("xpath=//a[contains(., 'My account') and @data-toggle]").click();
})

When('User enter login details', async function() {
    await page.locator("xpath=//input[@id='input-email']").fill('ph123rm@gmail.com');
    await page.locator("xpath=//input[@id='input-password']").fill('teste@123');
    await page.locator("xpath=//input[@value='Login']").click();
})


Then('Home page should be displayed', async function() {
    await page.locator("xpath=//a[contains(., 'Edit your account information')]").isVisible();
})

Then('Upon logout', async function() {
    await page.locator("xpath=//a[contains(., 'Logout') and @class='list-group-item']").click();
    await page.getByRole("link", { name: 'Continue' }).click();    
})

Then('Logout should be successful', async function() {
    console.log('logout is success')
})

After(async function() {
    await page.close();
    await bCtx.close();
    await browser.close();
})