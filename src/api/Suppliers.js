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
    define(['ApiClient', 'model/ListSupplier', 'model/Supplier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSupplier'), require('../model/Supplier'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Suppliers = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSupplier, root.OrderCloud.Supplier);
  }
}(this, function(ApiClient, ListSupplier, Supplier) {
  'use strict';

  /**
   * Supplier service.
   * @module api/Suppliers
   */

  /**
   * Constructs a new Suppliers. 
   * @alias module:api/Suppliers
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} supplierID ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.callDelete = function(supplierID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling callDelete");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/Supplier} supplier 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Supplier}
     */
    this.create = function(supplier) {
      var postBody = supplier;

      // verify the required parameter 'supplier' is set
      if (supplier == undefined || supplier == null) {
        throw new Error("Missing the required parameter 'supplier' when calling create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Supplier}
     */
    this.get = function(supplierID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling get");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSupplier}
     */
    this.list = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListSupplier;

      return this.apiClient.callApi(
        '/suppliers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/Supplier} partialSupplier 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Supplier}
     */
    this.patch = function(supplierID, partialSupplier) {
      var postBody = partialSupplier;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling patch");
      }

      // verify the required parameter 'partialSupplier' is set
      if (partialSupplier == undefined || partialSupplier == null) {
        throw new Error("Missing the required parameter 'partialSupplier' when calling patch");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/Supplier} supplier 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Supplier}
     */
    this.save = function(supplierID, supplier) {
      var postBody = supplier;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling save");
      }

      // verify the required parameter 'supplier' is set
      if (supplier == undefined || supplier == null) {
        throw new Error("Missing the required parameter 'supplier' when calling save");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = Supplier;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
