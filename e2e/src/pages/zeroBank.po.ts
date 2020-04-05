import { browser, by, element, ExpectedConditions as EC, protractor } from 'protractor';
import { DriverProvider } from 'protractor/built/driverProviders';

let env = require('../env.js');

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(env.setDefaultTimeout);

export class AppPage {
  login() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);

    browser.driver.get(env.baseUrl);
    browser.driver.findElement(by.id('userIdBiz')).sendKeys(env.userName);
    browser.driver.findElement(by.id('passBiz')).sendKeys(env.userPassword);
    return browser.driver.findElement(by.css('[data-loc="SignIn"]')).click();
  }

  secretQuestionLogin() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);

    browser.driver.get(env.baseUrl);
    browser.driver.findElement(by.id('userIdBiz')).sendKeys(env.userNameSecret);
    browser.driver.findElement(by.id('passBiz')).sendKeys(env.userPasswordSecret);
    return browser.driver.findElement(by.css('[data-loc="SignIn"]')).click();
  }

  homepage(){
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    browser.driver.get(env.baseUrl);
    browser.sleep(5000);
    return element(by.xpath('/html/body/div[1]/div[2]/div/div[2]/div/div/div/div[1]/div/h4')).getAttribute("textContent") as Promise<string>;
  }

  navigateTo(url: string) {
    return browser.get(url) as Promise<any>;
  }

  onlineBankingNav(){
    return element(by.id('onlineBankingMenu')).click();
  }

  onlineBankingTitle(){
    return element(by.css('h1')).getAttribute("textContent") as Promise<string>;
  }

  feedbackgNav(){
    return element(by.id('feedback')).click();
  }

  feedbackTitle(){
    return element(by.id('feedback-title')).getAttribute("textContent") as Promise<string>;
  }
  getTitleText() {
    return element(by.id('gNavTexHeader')).getAttribute("textContent") as Promise<string>;
  }

  selectSecretQuestionOption() {
    return element(by.xpath('/html/body/div[1]/div[4]/div[4]/div/div[3]/div/div/strong/span/a/b')).click();
  }

  selectAdvanceFilters() {
    var filterBtn = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/ul/li[1]/a/i'));
    browser.wait(EC.elementToBeClickable(filterBtn), 20000);
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/ul/li[1]/a/i')).click();

  }

  fillForm() {
    var applyButton = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-filter-sidebar/app-shared-modal/div/div/div/div[3]/button[2]'));
    var orderNumber = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-filter-sidebar/app-shared-modal/div/div/div/div[2]/div/div/div[1]/div[1]/input'));
    orderNumber.sendKeys('123');
    return applyButton.click();
  }

  orderFieldStatus() {

    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-filter-sidebar/app-shared-modal/div/div/div/div[2]/div/div/div[1]/div[1]/input')).getAttribute("textContent") as Promise<string>;;

  }

  checkTableResults() {
    //return element(by.xpath('//*[@id="content"]/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[3]/div/p-datatable/div/div[1]/div/div[2]/div/table/tbody/tr[1]/td[1]/span/div')).getAttribute("textContent") as Promise<string>;
    //*[@id="content"]/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[2]/div
    return element(by.xpath('//*[@id="content"]/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[2]/div')).getAttribute("textContent") as Promise<string>;
  }

  checkChipStarInserted() {
    return element(by.className('chip')).getAttribute("textContent") as Promise<string>;
  }

  answerSecretQuestion() {
    element(by.id('answer')).sendKeys('Test');
    var elm = element(by.xpath('//*[@id="validateSqaForm"]/div[4]/a'));
    return elm.click();
  }
  quickSearch() {
    var qSearch = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/div/input')).click();
    return qSearch;
  }

  quickSearchEnter() {
    var qSearch = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/div/input')).sendKeys('2176839');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  quickSearchOrder() {

    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr/td[2]/div')).getAttribute("textContent") as Promise<string>;
  }

  quickSearchEnterNonValid() {
    var qSearchNonValid = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/div/input')).sendKeys('adasdasdasdasdas');

    browser.actions().sendKeys(protractor.Key.ENTER).perform();
  }

  quickSearchNonValidOrder() {
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr/td')).getAttribute("textContent") as Promise<string>;

  }

  selectViewBy() {
    element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[1]/p-dropdown/div/label')).click().then(function () {
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    })
  }

  clickRecentSearch() {
    element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[1]/button')).click();
  }

  clearQuickSearchBox() {
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/div/input')).clear();
  }

  refreshBtn() {
    var refreshBtn = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/ul/li[6]/a/i'));
    return refreshBtn.click();
  }

  chartIcon() {
    var chartIcon = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/ul/li[5]/a/i'));
    return chartIcon.click();
  }

  clickOnDonut() {
    var clickDonut = element(by.xpath('//html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-status-charts/div[2]/div[1]/div/div/svg/g[1]/g[1]/path[9]'));
    return clickDonut.click();
  }

  closeCharts() {
    var closeCharts = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-status-charts/div[1]/a'));
    return closeCharts.click();
  }

  chartDropdown() {
    var chartDropdown = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-status-charts/div[1]/p-dropdown/div/label'));
    chartDropdown.click().then(function () {
      browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    })
  }

  clickOnBar() {
    var clickBar = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-status-charts/div[2]/div[1]/div/div/svg/g[5]/g[1]/rect[7]'));
    return clickBar.click();
  }

  optionSelectedDonut() {
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[2]/div[2]/div/span')).getAttribute("textContent") as Promise<string>;
  }

  customizeTablesIcon() {
    var customTableIcon = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[2]/ul/li[2]/a/i'));
    return customTableIcon.click();
  }

  defaultColumnSettings() {
    var defaultColumnSettings = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[2]/div/div/div[2]/div/div/label'));
    return defaultColumnSettings.click();
  }

  orderNumberTable() {
    var orderNumberTable = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/label'));
    return orderNumberTable.click();
  }
  taskOrderTable() {
    var taskOrderTable = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[2]/div/div/div[3]/div/div[3]/div/label'));
    return taskOrderTable.click();
  }
  applyCustomTable() {
    var applyCustomTable = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[3]/button[2]'));
    return applyCustomTable.click();
  }

  firstElementTable() {
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[1]/div/table/thead/tr/th[2]')).getAttribute("textContent") as Promise<string>;
  }
  clickOutside(){
    var clickOutsideChecks = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[2]'));
    return clickOutsideChecks.click();
  }

  dragDrop(){
   var taskOrder = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[2]/div/div/div[3]/div/div[3]/div/div/span'));
   var orderNumber = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/app-custumize-table/app-shared-modal/div/div/div/div[2]/div/div/div[3]/div/div[1]/div/div/span'));
  browser.actions().dragAndDrop(taskOrder,orderNumber).perform();  
  }

  viewByText(){
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/div[1]/div[1]/p-dropdown/div/label')).getAttribute("textContent") as Promise<string>;
  }

  extendedOrderList(){
    var openExtendedList = element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr[1]/td[1]/a/i'));
    return openExtendedList.click();
  }

  interactionmenufItem(){
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr[2]/td/app-order-details/div/app-order-details-interactive/section/ul/li[1]/a')).getAttribute("textContent") as Promise<string>;
  }

  extendedOrderStatus(){
    return element(by.xpath('/html/body/app-root/main/app-vgo-ordering/div/app-vgo-home-page/app-vgo-orders-list/section/p-table/div/div/div/div[2]/table/tbody/tr[2]/td/app-order-details/div/app-order-details-interactive/section[2]/div/div[1]/p-table/div/div/div/div[1]/div/table/thead/tr/th[1]')).getAttribute("textContent") as Promise<string>;
  }

}
