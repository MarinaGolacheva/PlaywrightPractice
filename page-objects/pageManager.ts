import { Page, expect } from "@playwright/test";
import { FormLayoutsPage } from "./formLayoutsPage";
import { NavigationPage } from "./navigationPage";

export class PageManager {
private readonly page: Page
private readonly navigationPage: NavigationPage
private readonly formLayoutsPage: FormLayoutsPage

constructor(page: Page){
    this.page = page
    this.navigationPage = new NavigationPage(this.page)
    this.formLayoutsPage = new FormLayoutsPage(this.page)
}

navigateTo(){
return this.navigationPage
}

onFormsLayoutsPage(){
    return this.formLayoutsPage
}
}