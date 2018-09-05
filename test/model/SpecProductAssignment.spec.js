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
    instance = new OrderCloud.SpecProductAssignment();
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

  describe('SpecProductAssignment', function() {
    it('should create an instance of SpecProductAssignment', function() {
      // uncomment below and update the code to test SpecProductAssignment
      //var instane = new OrderCloud.SpecProductAssignment();
      //expect(instance).to.be.a(OrderCloud.SpecProductAssignment);
    });

    it('should have the property specID (base name: "SpecID")', function() {
      // uncomment below and update the code to test the property specID
      //var instane = new OrderCloud.SpecProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property productID (base name: "ProductID")', function() {
      // uncomment below and update the code to test the property productID
      //var instane = new OrderCloud.SpecProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property defaultValue (base name: "DefaultValue")', function() {
      // uncomment below and update the code to test the property defaultValue
      //var instane = new OrderCloud.SpecProductAssignment();
      //expect(instance).to.be();
    });

    it('should have the property defaultOptionID (base name: "DefaultOptionID")', function() {
      // uncomment below and update the code to test the property defaultOptionID
      //var instane = new OrderCloud.SpecProductAssignment();
      //expect(instance).to.be();
    });

  });

}));
