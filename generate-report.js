const reporter = require('cucumber-html-reporter');

reporter.generate({
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber_report.json',
    output: 'reports/cucumber_report.html',
    reportSuiteAsScenarios: false,
    launchReport: false,
    metadata: {
      'App Version': '0.3.2',
      'Test Environment': 'POC'
    }
  });