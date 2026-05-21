import {test, expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async ({ page }) => {
    //by Tag name
    await page.locator('input').first().click
    //by ID
    page.locator('#inputEmail')
    //by class value
    page.locator('.shape-rectangle')
    //by attribute
    page.locator('[placeholder="Email"]')
    //by class value (full)
    //page.locator()
})

test('locating child elements', async ({ page }) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
})

//test('locating parent element', async({page}) => {
//       await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name:"E-mail"}).click()
//})

test('Reusing the locators', async ({ page }) => {
    const basicForm = page.locator('nb-card').filter({ hasText: "Basic Form" })

    await basicForm.getByRole('textbox', { name: "Email" }).fill('test@test.com')
    await basicForm.getByRole('textbox', { name: "Password" }).fill('Welcome')
    await basicForm.getByRole('button').click()
})

test('extracting values', async ({ page }) => {
    //single test value
    const basicForm = page.locator('nb-card').filter({ hasText: "Basic Form" })
    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toEqual('Submit')

    //all text values
    const allRadioButtonsLabel = await page.locator('nb-radio').allTextContents()
    expect(allRadioButtonsLabel).toContain("Option 1")

    //input value
    const emailField = basicForm.getByRole('textbox', { name: "Email" })
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')
})

test('assertions', async ({ page }) => {
    const basicFormButton = page.locator('nb-card').filter({ hasText: "Basic Form" }).locator('button')

    //General assertions
    const text = await basicFormButton.textContent()
    expect(text).toEqual("Submit")

    //Lacator assertions
    await expect(basicFormButton).toHaveText('Submit')
})

