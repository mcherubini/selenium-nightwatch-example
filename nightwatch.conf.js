require('@babel/register');

const seleniumStandalone = require("selenium-standalone");
const chromedriver = require("./node_modules/chromedriver");
const geckodriver = require("geckodriver");
const cucumberConf = require("./cucumber.conf");

module.exports = (function(settings) {
    settings.test_workers = false;
    return settings;
  })

const config = {
    src_folders : ["./src/tests"],
    output_folder : "reports",
    page_objects_path : [
      "./pages/google-homepage"
    ],custom_commands_path : "./commands/",

    test_settings : {
      default : {
        webdriver: {
          start_process: true,
          server_path: geckodriver.path,
          cli_args: ['--port=4444']
        },
        launch_url : "https://www.google.es", 
        desiredCapabilities: {
          browserName: "chrome",
          javascriptEnabled : true,
          acceptSslCerts : true
        }
      },
      google_secure : {
        launch_url : "https://www.google.es",
        desiredCapabilities: {
          browserName: "firefox",
          javascriptEnabled : true,
          acceptSslCerts : true
        }
      },
      saucelabs_test : {
        webdriver: {
          start_process: false,
          server_path: "",
          cli_args: []
        },
        selenium_host: "ondemand.eu-central-1.saucelabs.com",
        selenium_port: 80,
        username : "",
        access_key : "",
        launch_url : "https://www.google.es",
        desiredCapabilities: {
          browserName: "chrome",
          platform: "Windows 10",
          javascriptEnabled : true,
          acceptSslCerts : true,
          version: 76,
          screenResolution: "1920x1080"
        }
      }
    }
}

module.exports = config;