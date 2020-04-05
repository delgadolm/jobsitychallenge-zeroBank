// import { by } from "protractor";

// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
/**
 * @type { import("protractor").Config }
 */

var env = require('./src/env');

exports.config = {

  specs: ['./src/features/navMenu.feature'],
  chromeDriver: (env.chromeDriverVersion),
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1
  },
  resultJsonOutputFile: 'report.json',
  directConnect: true,
  restartBrowserBetweenTests: true,
  baseUrl: 'http://zero.webappsecurity.com',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: ['./src/env.ts','./src/steps/**/*.steps.ts'],
  },
  onPrepare: async() => {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};