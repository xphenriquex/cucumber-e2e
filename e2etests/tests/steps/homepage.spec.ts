import { Then } from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { getPage } from "../../corelib/corelib.spec";

Then('Home page should be displayed', async function() {
    expect(getPage().locator("xpath=//a[contains(., 'Edit your account information')]")).toBeVisible()
})

Then('Upon logout', async function() {
    await getPage().locator("xpath=//a[contains(., 'Logout') and @class='list-group-item']").click();
    await getPage().getByRole("link", { name: 'Continue' }).click();    
})
