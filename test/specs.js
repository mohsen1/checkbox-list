'use strict';

var expect = require('chai').expect;
var driver = require('./driver');
var webdriver = require('selenium-webdriver');

describe('checkbox-list', function () {
  it('opens the demo page', function (done) {
    setTimeout(driver.get.bind(driver, 'http://localhost:8123/demo'), 2000);
    setTimeout(done, 4000);
  });

  it('should check all checkboxes when [checkbox-list-all] is checked', function(done) {
    var locator = webdriver.By.xpath('/html/body/div[2]/checkbox-list/label[1]/input');
    var all = driver.findElement(locator);

    all.click();

    driver.findElement(webdriver.By.xpath('/html/body/div[2]/checkbox-list/label[2]/input'))
      .isSelected().then(function (is) {
        expect(is).to.be.true;
        done();
      });
  });
});

// afterEach(function(done){
//   driver.manage().logs().get('browser').then(function(browserLogs) {
//     var errors = [];
//     browserLogs.forEach(function(log){
//       // 900 and above is "error" level. Console should not have any errors
//       if (log.level.value > 900) {
//         console.log('browser error message:', log.message); errors.push(log);
//       }
//     });
//     if (errors.length) {
//       throw new Errro('Found console errors');
//       process.exit(1);
//     }
//     done();
//   });
// });
