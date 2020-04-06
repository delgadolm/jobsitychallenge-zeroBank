import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/zeroBank.po';
import { browser } from 'protractor';

let page: AppPage;
let env = require('../env.js');

Before(() => {
    page = new AppPage();
});

Given(/^I go to any page$/, async () => {
    await page.homepage().then(function(){
        browser.sleep(2000);
    });
});

When(/^I perform a search of Transfer funds$/, async () => {
    await page.searchHead().then(function () {
        browser.sleep(2000);
    });
});

Then(/^It should give me results of transfer funds$/, async () => {
    expect((await page.searchResult())).to.equal('Zero - Transfer Funds');
});


