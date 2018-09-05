/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
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
    factory(root.expect, root.OrderCloud);
  }
}(this, function(expect, OrderCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OrderCloud.PaymentTransaction();
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

  describe('PaymentTransaction', function() {
    it('should create an instance of PaymentTransaction', function() {
      // uncomment below and update the code to test PaymentTransaction
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be.a(OrderCloud.PaymentTransaction);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "Type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property dateExecuted (base name: "DateExecuted")', function() {
      // uncomment below and update the code to test the property dateExecuted
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "Amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property succeeded (base name: "Succeeded")', function() {
      // uncomment below and update the code to test the property succeeded
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property resultCode (base name: "ResultCode")', function() {
      // uncomment below and update the code to test the property resultCode
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property resultMessage (base name: "ResultMessage")', function() {
      // uncomment below and update the code to test the property resultMessage
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

    it('should have the property xp (base name: "xp")', function() {
      // uncomment below and update the code to test the property xp
      //var instane = new OrderCloud.PaymentTransaction();
      //expect(instance).to.be();
    });

  });

}));
