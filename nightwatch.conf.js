require('@babel/register');

const seleniumStandalone = require("selenium-standalone");
const chromedriver = require("./node_modules/chromedriver");
const geckodriver = require("geckodriver");

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
          port: 4444,
          cli_args: ['--port=4444']
        },
        launch_url : "http://www.google.es",
        desiredCapabilities: {
          browserName: "firefox",
          javascriptEnabled : true,
          acceptSslCerts : true
        }
      },
      "google-secure" : {
        "launch_url" : "https://www.google.es",
        "desiredCapabilities": {
          "browserName": "firefox",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true
        }
      }
    }
}

module.exports = config;