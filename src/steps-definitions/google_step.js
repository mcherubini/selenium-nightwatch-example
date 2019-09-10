var nightwatch_functions = require('nightwatch-api');
var client = nightwatch_functions.client;
//import { Given, Then } from 'cucumber';
var cucumber = require('cucumber');
var Given = cucumber.Given;
var Then = cucumber.Then;
var And = cucumber.And;
var When = cucumber.When;
var home_page = client.page.home_page();

Given(/^I open Google`s search page$/, async () => {
  console.log(client.options);
  await home_page.navigate();
});

Then(/^the title is "(.*?)"$/, async text => {
  await client.assert.title(text);
  await home_page.expect.section("@menu").to.be.visible;
  await home_page.expect.section("@body").to.be.visible;
});

Then(/^the Google search form exists$/, async () => {
  var section = home_page.section.body;
  await section.expect.element("@input_search").to.be.visible;
  //await client.assert.visible('input[name="q"]');
});

When(/^i search "(.*?)" with result filtered in last week$/, async text =>  {
  var section = home_page.section.body;
  await section.setValue("@input_search",text);
  console.log("no ha pausado");
  client.pause(5000);
  console.log("primera pausa");
  await section.sendKeys("@input_search",client.Keys.ENTER);
  client.execute(function () {
    let element = document.getElementsByClassName("gLFyf gsfi");
    const ke = new KeyboardEvent("keydown", {
      bubbles: true, cancelable: true, keyCode: 13
    });
  document.body.dispatchEvent(ke);
  },[]);
  console.log("ultima pausa");
  client.pause(50000);
});