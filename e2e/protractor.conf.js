// import { by } from "protractor";

// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
/**
 * @type { import("protractor").Config }
 */

var env = require('./src/env');

exports.config = {

  specs: ['./src/features/searchHead.feature'],
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

  // plugins: [{
   
  //   package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
  //   options: {
  //     automaticallyGenerateReport: true,
  //     removeExistingJsonReportFile: true,
  //     pageTitle: 'Automation Test',
  //     reportName: 'Zero Bank Automation Test',
  //     customData: {
  //       title: 'Automation Test Info',
  //       data: [
  //         {label: 'Project', value: 'Zero Bank'},
  //         {label: 'Release', value: '1.0.0'},
  //         {label: 'Cycle', value: '0.0'},
  //       ]
  //     }
  //   }
  // }],
  onPrepare: async() => {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
  }
};