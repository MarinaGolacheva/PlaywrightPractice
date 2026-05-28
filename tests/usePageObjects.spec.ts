import { test, expect } from "@playwright/test"
import { PageManager } from "../page-objects/pageManager"
import { FormLayoutsPage } from "../page-objects/formLayoutsPage"


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('navigate to form page', async ({ page }) => {
    const pm = new PageManager(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.navigateTo().datepickerPage()
    await pm.navigateTo().smartTablePage()
    await pm.navigateTo().toastrPage()
    await pm.navigateTo().tooltipPage()
})

test('parametrized methods', async ({ page }) => {
    const pm = new PageManager(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)

    await pm.navigateTo().formLayoutsPage()
    await pm.onFormsLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption('test@test.com', 'Welcome1', 'Option 2')
})