import { browser, by, element, ExpectedConditions as EC, protractor } from 'protractor';

let env = require('../env.js');

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(env.setDefaultTimeout);

export class AppPage {

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

  moreServicesBtnHomepage(){
    return element(by.id('online-banking')).click();
  }

  checkAccActLinkHomepage(){
    return element(by.id('account_activity_link')).click();
  }

  transFundsLinkHomepage(){
    return element(by.id('transfer_funds_link')).click();
  }

  moneyMapLinkHomepage(){
    return element(by.id('money_map_link')).click();
  }

  loginTitle(){
    return element(by.css('h3')).getAttribute("textContent") as Promise<string>;
  }

  accSummaryLinkOB(){
    return element(by.id('account_summary_link')).click();
  }

  payBillsLink(){
    return element(by.id('pay_bills_link')).click();
  }

  onlineStatementsLinkOB(){
    return element(by.id('online_statements_link')).click();
  }

  faqLink(){
    return element(by.id('faq-link')).click();
  }

  faqTitle(){
    return element(by.css('h3')).getAttribute("textContent") as Promise<string>;
  }

  fillFeedbackForm(){
    var name = element(by.name('name'));
    var email = element(by.name('email'));
    var subject = element(by.name('subject'));
    var comment = element(by.name('comment'));

    name.sendKeys(env.userName);
    email.sendKeys(env.userEmail);
    subject.sendKeys(env.feedbackSubject);
    comment.sendKeys(env.feedbackComment);
  }

  nameFeedback(){
    return element(by.name('name')).getText()as Promise<string>;
  }

  sendFeedbackForm(){
    var sendForm = element(by.xpath('/html/body/div[1]/div[2]/div/div/div/form/div[2]/input[1]'))
    return  sendForm.click();
  }

  successFeedbackMessage(){
    return element(by.xpath('/html/body/div[1]/div[2]/div/div/div/text')).getText()as Promise<string>;
  }

  clearFeedbackForm(){
    return element(by.name('clear')).click();
  }

  searchHead(){
    var search = element(by.id('searchTerm'));
    search.sendKeys('Transfer Funds');
    return browser.actions().sendKeys(protractor.Key.ENTER).perform()
  }

  searchResult(){
    return element(by.xpath('/html/body/div[1]/div[2]/div/ul/li/a')).getAttribute("textContent") as Promise<string>;
  }

}
