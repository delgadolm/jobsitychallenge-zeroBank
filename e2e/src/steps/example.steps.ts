import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;
let env = require('../env.js');

Before(() => {
    page = new AppPage();
});

Given(/^I log in as a normal user$/, async () => {
    await page.login().then(function () {
        browser.sleep(10000);
    });
});

When(/^I go to the VGO Order page$/, async () => {
    await page.navigateTo(env.baseUrl).then(function () {
        browser.sleep(10000);
    });
});

Then(/^The title should be correct$/, async () => {
    expect((await page.onlineBankingTitle())).to.equal('Enterprise Infrastructure Solutions (EIS)');
});
