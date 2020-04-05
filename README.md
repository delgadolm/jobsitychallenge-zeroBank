# jobsitychallenge
This is a challenge for the QA Automation position at Jobsity.

## Instructions to set everything up

1. Download node.js with npm 
2. Use `npm install -g protractor` to install the Protractor framework globally
3. Use `npm install --save-dev @types/{chai,cucumber} chai cucumber protractor-cucumber-framework ` to install the dependendices needed for chai and the cucumber framework
    If this does not work on your machine, use `npm i @types/chai @types/cucumber`
4. Install Angular CLI by using `npm install -g @angular/cli`
5. Use `npm install multiple-cucumber-html-reporter` to install the reporter
6. Save the dependencies for the reports `npm install multiple-cucumber-html-reporter --save` and `npm install multiple-cucumber-html-reporter --save-dev`
7. Run `ng e2e` and it will run all the test available on the framework.
8. Check the reports by going to
