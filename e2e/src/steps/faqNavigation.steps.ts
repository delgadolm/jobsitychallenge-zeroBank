import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I am at the homepage$/, async () => {
    await page.homepage().then(function(){
        browser.sleep(2000);
    });
});

When(/^I click on the Feedback on the nav Menu$/, async () => {
    await page.feedbackgNav().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on the FAQ link$/, async () => {
    await page.faqLink().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to the FAQ page$/, async () => {
    expect((await page.faqTitle())).to.equal('Frequently Asked Questions');
});
