var app = require('../src/app');
//console.log(app);
var assert = require("assert");
var webdriver = require("selenium-webdriver");

describe("testing javascript in the browser", function() {
  if (process.env.SAUCE_USERNAME != undefined) {
    this.browser = new webdriver.Builder()
      .usingServer('http://'+ process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub')
      .withCapabilities({
        'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
        build: process.env.TRAVIS_BUILD_NUMBER,
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        browserName: "chrome"
      }).build();
  } else {
    this.browser = new webdriver.Builder()
      .withCapabilities({
        browserName: "chrome"
      }).build();
  }


  afterEach(function() {
    return this.browser.quit();
  });

  it("should handle clicking on a headline", function(done) {
    driver.get('https://www.google.com');
    driver.getTitle().then(function (title) {
      console.log("title is: " + title);
      done();
    });
  });
});
