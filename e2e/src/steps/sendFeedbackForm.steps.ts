import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;
let env = require('../env.js');

Before(() => {
    page = new AppPage();
});

Given(/^I am in the homepage$/, async () => {
    await page.homepage().then(function(){
        browser.sleep(2000);
    });
});

When(/^I click on the Feedback on the navi Menu$/, async () => {
    await page.feedbackgNav().then(function () {
        browser.sleep(2000);
    });
});

When(/^I fill the form with valid data/, async () => {
    await page.fillFeedbackForm();
});

When(/^I click on send$/, async () => {
    await page.sendFeedbackForm().then(function () {
        browser.sleep(10000);
    });
});

Then(/^I should recieve the successful message$/, async () => {
    expect((await page.successFeedbackMessage())).to.equal('Thank you for your comments, '+env.userName+'.They will be reviewed by our Customer Service staff and given the full attention that they deserve.');
});

Given(/^I go to the homepage first$/, async () => {
    await page.homepage().then(function(){
        browser.sleep(2000);
    });
});

When(/^I click on the Feedback on the navig Menu$/, async () => {
    await page.feedbackgNav().then(function () {
        browser.sleep(2000);
    });
});

When(/^I fill the form with any data$/, async () => {
    await page.fillFeedbackForm();
});

When(/^I click on clear$/, async () => {
    await page.clearFeedbackForm().then(function () {
        browser.sleep(2000);
    });
});

Then(/^I should verify that each field is empty$/, async () => {
    expect((await page.nameFeedback())).to.equal('');
});