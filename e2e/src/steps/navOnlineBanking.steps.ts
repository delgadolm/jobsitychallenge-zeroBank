import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
    page = new AppPage();
});

Given(/^I go to the Online Banking Section$/, async () => {
    await page.homepage().then(function(){
        page.onlineBankingNav().then(function(){
            browser.sleep(2000);
        })
    });
});

When(/^I click on Account Summary$/, async () => {
    await page.accSummaryLinkOB().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to Login$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I'm at Online banking$/, async () => {
    await page.homepage().then(function(){
        page.onlineBankingNav().then(function(){
            browser.sleep(2000);
        })
    });
});

When(/^I click on Checking Account Activity Link$/, async () => {
    await page.checkAccActLinkHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should take me to the Login Page$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I'm on Online Banking$/, async () => {
    await page.homepage().then(function(){
        page.onlineBankingNav().then(function(){
            browser.sleep(2000);
        })
    });
});

When(/^I click on Transfer Funds Link$/, async () => {
    await page.transFundsLinkHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should get me to the Login Screen$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I'm on Online banking$/, async () => {
    await page.homepage().then(function(){
        page.onlineBankingNav().then(function(){
            browser.sleep(2000);
        })
    });
});

When(/^I click on Pay Bills Link$/, async () => {
    await page.payBillsLink().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should send me to Login$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I go to the Online banking once again$/, async () => {
    await page.homepage().then(function(){
        page.onlineBankingNav().then(function(){
            browser.sleep(2000);
        })
    });
});

When(/^I click on My Money Map Link$/, async () => {
    await page.moneyMapLinkHomepage().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should send me to the Login$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});

Given(/^I go to the Online banking one more time$/, async () => {
    await page.homepage().then(function(){
        page.onlineBankingNav().then(function(){
            browser.sleep(2000);
        })
    });
});

When(/^I click on Online Statements$/, async () => {
    await page.onlineStatementsLinkOB().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should be taken to the Login$/, async () => {
    expect((await page.loginTitle ())).to.equal('Log in to ZeroBank');
});