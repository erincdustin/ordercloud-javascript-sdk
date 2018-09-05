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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Incrementor = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Incrementor model module.
   * @module model/Incrementor
   * @version 2.0.1
   */

  /**
   * Constructs a new <code>Incrementor</code>.
   * @alias module:model/Incrementor
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Incrementor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Incrementor} obj Optional instance to populate.
   * @return {module:model/Incrementor} The populated <code>Incrementor</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('LastNumber')) {
        obj['LastNumber'] = ApiClient.convertToType(data['LastNumber'], 'Number');
      }
      if (data.hasOwnProperty('LeftPaddingCount')) {
        obj['LeftPaddingCount'] = ApiClient.convertToType(data['LeftPaddingCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Number} LastNumber
   */
  exports.prototype['LastNumber'] = undefined;
  /**
   * @member {Number} LeftPaddingCount
   */
  exports.prototype['LeftPaddingCount'] = undefined;



  return exports;
}));


