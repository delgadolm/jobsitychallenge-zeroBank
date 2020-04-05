import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;
let env = require('../env.js');

Before(() => {
    page = new AppPage();
});

Given(/^I check that the view by dropdown has My Recent Order$/, async () => {
    await page.login().then(function () {
        browser.sleep(20000);
    });
    await page.navigateTo(env.vgoOrderingURL).then(function () {
        browser.sleep(20000);
    });
    expect((await page.viewByText()).trim()).to.equal('My Recent Orders');
});

When(/^I Click on the view By dropdown with an arrow down$/, async () => {
    page.selectViewBy();
    return browser.sleep(5000);
});

Then(/^The text of the dropdown should change to Pending$/, async () => {
    expect((await page.viewByText()).trim()).to.equal('Pending');});

When(/^I click on the view by with an arrow down once again$/, async () => {
     page.selectViewBy();
     return browser.sleep(5000);
});

Then(/^The text of the dropdown should change to Draft$/, async () => {
    expect((await page.viewByText()).trim()).to.equal('Draft');
});
