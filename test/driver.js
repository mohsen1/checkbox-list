/*
 * Web driver manager
*/
'use strict';

var webdriver = require('selenium-webdriver');
var firefox = webdriver.Capabilities.firefox();
var chrome = webdriver.Capabilities.chrome();
var browser = process.env.TRAVIS ? firefox : chrome;

var driver = new webdriver.Builder().withCapabilities(browser).build();

module.exports = driver;
