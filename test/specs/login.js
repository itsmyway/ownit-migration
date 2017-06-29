describe("First Spec", function() {
    it("should navigate to the WebdriverIO homepage", function(){
      browser.url('http://webdriver.io')
      var title = browser.title();
      console.log(title);
        // outputs the following:
        // "WebdriverIO - Selenium 2.0 javascript bindings for nodejs"
    });
}) ;
