const {fs} = require('fs');
const { setDefaultTimeout, After, AfterAll, BeforeAll } = require('cucumber');
const {
  createSession,
  closeSession,
  startWebDriver,
  stopWebDriver,
  getNewScreenshots
} = require('nightwatch-api');


setDefaultTimeout(60000);

BeforeAll(async () => {
  console.log("The environment passed is:" + process.env.NIGHTWATCH_ENV);
  await startWebDriver({ env: process.env.NIGHTWATCH_ENV || 'default'});
  await createSession();
});

AfterAll(async () => {
  await closeSession();
  await stopWebDriver();
  console.log("After all executed");
  await setTimeout(() => {
    /**/
  }, 1000);
});

After(function() {
    console.log("After executed");
  getNewScreenshots().forEach(file => this.attach(fs.readFileSync(file), 'image/png'));
});