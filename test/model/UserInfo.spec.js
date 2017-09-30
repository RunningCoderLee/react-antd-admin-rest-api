/**
 * React-Antd-Admin-Rest-Api
 * a standard restful api for project react-antd-admin
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ReactAntdAdminRestApi);
  }
}(this, function(expect, ReactAntdAdminRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ReactAntdAdminRestApi.UserInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserInfo', function() {
    it('should create an instance of UserInfo', function() {
      // uncomment below and update the code to test UserInfo
      //var instane = new ReactAntdAdminRestApi.UserInfo();
      //expect(instance).to.be.a(ReactAntdAdminRestApi.UserInfo);
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new ReactAntdAdminRestApi.UserInfo();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new ReactAntdAdminRestApi.UserInfo();
      //expect(instance).to.be();
    });

  });

}));
