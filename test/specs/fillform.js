var webdriverio = require('webdriverio'),
    should = require('should');

const fs = require("fs");
const path = require("path");


// a test script block or suite
describe('Form Field Test for Web Driver IO - Tutorial Test Page Website', function() {

  // set timeout to 10 seconds
	this.timeout(10000);
  var driver = {};

  // hook to run before tests
  before( function () {

    try {
      var data = fs.readFileSync(__dirname + '/json.txt', 'utf8');
      console.log(data);
    } catch(e) {
        console.log('Error:', e.stack);
    }

    if(typeof browser === "undefined") {
      // load the driver for browser
      driver = webdriverio.remote({ desiredCapabilities: {browserName: 'chrome'} });
      return driver.init();
    } else {
      // grunt will load the browser driver
      driver = browser;
      return;
    }
  });

  // a test spec - "specification"
  it('should be load correct page and title', function () {
    return driver
      .url('https://localdev.sr.widgets.intuit.com/sample.html')
      // get title, then pass title to function()
      .getTitle().then( function (title) {
        // verify title
        (title).should.be.equal("IUS SignUp Widget");
        // uncomment for console debug
         console.log('Current Page Title: ' + title);
      });
  });
  //{"responseCode":"DUPLICATE_USER","responseMessage":"LOGIN NAME IS NOT UNIQUE"}
  //{"responseCode":"USER_NOT_FOUND","responseMessage":"LoginName valid23@gmail.com not found"}
  //https://github.com/onewithhammer/web-driver-io-tutorial/blob/master/dataLoopExample2-wdio.js
  // Set the email to valid1@user.com
  it('should set email to valid1@user.com', function () {
    return driver.setValue("#ius-email", "valid1@user.com").then((e) => {
      console.log(" Email ID Just blurred");
      return driver.click('#ius-password').then(function(e){
        console.log("After Email ID blurred");
        return driver.pause(5000).then((e) => {
          console.log("PAUSED")
          return driver.getValue('#ius-email-message-text').then((e) => {
            console.log('DOne')
            //(e).should.be.equal("This user ID is already taken.");
          })
        })
      })
    });
  });

  // Set the password to Intuit17@
  it('should set password to Intuit17@', function () {
    return driver.setValue("#ius-password", "Intuit17@")
      .getValue("#ius-password").then( function (e) {
        (e).should.be.equal("Intuit17@");
        console.log("Password: " + e);
      });
  });

  // Set the confirm password to Intuit17@
  it('should set confirm password to Intuit17@', function () {
    return driver.setValue("#ius-confirm-password", "Intuit17@")
      .getValue("#ius-confirm-password").then( function (e) {
        (e).should.be.equal("Intuit17@");
        console.log("Confirm Password: " + e);
      });
  });

  //Submit form and wait for search results
  it('should submit form and wait for results', function () {
    return driver.click("#ius-form-sign-up").then( function(e) {
         console.log('Submit Search Form',e);
        // return new Promise((resolve, reject) => {
        //
        // })
      })
      // .waitForVisible("#search-results", 10000).then(function (e) {
      //   console.log('Search Results Found');
      // });
  });



  // a "hook" to run after all tests in this block
	after(function() {
    if(typeof browser === "undefined") {
      return driver.end();
    } else {
      return;
    }
  });
});
