import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;
let env = require('../env.js');

Before(() => {
    page = new AppPage();
});

Given(/^I go to the home page$/, async () => {
    await page.homepage().then(function(){
        browser.sleep(2000);
    });
});

When(/^I click on the Online Banking Section$/, async () => {
    await page.onlineBankingNav().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to the Online Banking Section$/, async () => {
    expect((await page.onlineBankingTitle())).to.equal('Online Banking');
});

Given(/^I go to the home page once again$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on the Feedback Section$/, async () => {
    await page.feedbackgNav().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to the Feedback Section$/, async () => {
    expect((await page.feedbackTitle())).to.equal('Feedback');
});
