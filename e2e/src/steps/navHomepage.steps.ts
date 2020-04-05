import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;
let env = require('../env.js');

Before(() => {
    page = new AppPage();
});

Given(/^I go to the homepage$/, async () => {
    await page.homepage().then(function(){
        browser.sleep(2000);
    });
});

When(/^I click on More Services under Online Banking$/, async () => {
    await page.moreServicesBtnHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to Online Banking$/, async () => {
    expect((await page.onlineBankingTitle())).to.equal('Online Banking');
});

Given(/^I go to the home page again$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on Checking Account Activity$/, async () => {
    await page.checkAccActLinkHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to the Login Section$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I'm on te homepage$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on Transfer Funds$/, async () => {
    await page.transFundsLinkHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to the Login$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I go to the home page one more time$/, async () => {
    await page.homepage().then(function () {
        browser.sleep(2000);
    });
});

When(/^I click on My Money Map$/, async () => {
    await page.moneyMapLinkHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should get me to the Login$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});