import { Given, When } from "@cucumber/cucumber";
import { getPage } from "../../corelib/corelib.spec";

Given('User is on login page', async function() {
    await getPage().goto('https://ecommerce-playground.lambdatest.io/')
    await getPage().locator("xpath=//a[contains(., 'My account') and @data-toggle]").click();
})

When('User enter login details', async function() {
    await getPage().locator("xpath=//input[@id='input-email']").fill('ph123rm@gmail.com');
    await getPage().locator("xpath=//input[@id='input-password']").fill('teste@123');
    await getPage().locator("xpath=//input[@value='Login']").click();
})

When('Logout should be successful', async function() {
    console.log('logout is success')
})
