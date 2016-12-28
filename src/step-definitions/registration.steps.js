var assert = require('assert'),
    tmpResult;

module.exports = function () {

  this.Given(/^I go to \"([^\"]*)\"$/, function (httpsstagepurinadentalifecom) {
    browser.url(httpsstagepurinadentalifecom);
  });

  this.When(/^I start the registration process form the login page$/, function () {
      // click on registration, fill the form and register.
      //gigya-loginID-7044876377523942

      browser.click('a.gigya-register')
      .pause(5000);
      browser.setValue('#gigya-loginID-7044876377523942', 'nestlepurinadentalife+40@gmail.com')
      .pause(2000);
      //browser.setValue('input[name=password]', 'Admin1234')
      browser.addValue('input[name=password]', 'Admin1234')
      .pause(3000);
      browser.addValue('input[name=profile.firstName]', 'Dansjjek');


  });

  this.Then(/^I should see logout link$/, function () {
    assert(true);
  });

};
