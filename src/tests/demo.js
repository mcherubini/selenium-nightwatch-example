export default {
    'Demo test' : function (browser) {
      console.log("DEBUGUEATE YAA OSTIAAAA");
      debugger;
      browser
        .url("https://www.google.com")
        .waitForElementVisible("body",1000)
        .assert.title("Google")
        // ...
        browser.end();
    }
  };