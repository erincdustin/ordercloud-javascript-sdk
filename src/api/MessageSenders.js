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
    define(['ApiClient', 'model/ListMessageCCListenerAssignment', 'model/ListMessageSender', 'model/ListMessageSenderAssignment', 'model/MessageCCListenerAssignment', 'model/MessageSender', 'model/MessageSenderAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListMessageCCListenerAssignment'), require('../model/ListMessageSender'), require('../model/ListMessageSenderAssignment'), require('../model/MessageCCListenerAssignment'), require('../model/MessageSender'), require('../model/MessageSenderAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.MessageSenders = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListMessageCCListenerAssignment, root.OrderCloud.ListMessageSender, root.OrderCloud.ListMessageSenderAssignment, root.OrderCloud.MessageCCListenerAssignment, root.OrderCloud.MessageSender, root.OrderCloud.MessageSenderAssignment);
  }
}(this, function(ApiClient, ListMessageCCListenerAssignment, ListMessageSender, ListMessageSenderAssignment, MessageCCListenerAssignment, MessageSender, MessageSenderAssignment) {
  'use strict';

  /**
   * MessageSender service.
   * @module api/MessageSenders
   */

  /**
   * Constructs a new MessageSenders. 
   * @alias module:api/MessageSenders
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} messageSenderID ID of the message sender.
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.supplierID ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteAssignment = function(messageSenderID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID == undefined || messageSenderID == null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling deleteAssignment");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'supplierID': opts['supplierID']
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
        '/messagesenders/{messageSenderID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} messageSenderID ID of the message sender.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MessageSender}
     */
    this.get = function(messageSenderID) {
      var postBody = null;

      // verify the required parameter 'messageSenderID' is set
      if (messageSenderID == undefined || messageSenderID == null) {
        throw new Error("Missing the required parameter 'messageSenderID' when calling get");
      }


      var pathParams = {
        'messageSenderID': messageSenderID
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
      var returnType = MessageSender;

      return this.apiClient.callApi(
        '/messagesenders/{messageSenderID}', 'GET',
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessageSender}
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
      var returnType = ListMessageSender;

      return this.apiClient.callApi(
        '/messagesenders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.buyerID ID of the buyer.
     * @param {String} opts.messageSenderID ID of the message sender.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the message sender assignment. Possible values: User, Group, Company.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {String} opts.supplierID ID of the supplier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessageSenderAssignment}
     */
    this.listAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'buyerID': opts['buyerID'],
        'messageSenderID': opts['messageSenderID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'supplierID': opts['supplierID']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListMessageSenderAssignment;

      return this.apiClient.callApi(
        '/messagesenders/assignments', 'GET',
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListMessageCCListenerAssignment}
     */
    this.listCCListenerAssignments = function(opts) {
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
      var returnType = ListMessageCCListenerAssignment;

      return this.apiClient.callApi(
        '/messagesenders/CCListenerAssignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/MessageSenderAssignment} messageSenderAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.saveAssignment = function(messageSenderAssignment) {
      var postBody = messageSenderAssignment;

      // verify the required parameter 'messageSenderAssignment' is set
      if (messageSenderAssignment == undefined || messageSenderAssignment == null) {
        throw new Error("Missing the required parameter 'messageSenderAssignment' when calling saveAssignment");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/messagesenders/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/MessageCCListenerAssignment} messageCCListenerAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.saveCCListenerAssignment = function(messageCCListenerAssignment) {
      var postBody = messageCCListenerAssignment;

      // verify the required parameter 'messageCCListenerAssignment' is set
      if (messageCCListenerAssignment == undefined || messageCCListenerAssignment == null) {
        throw new Error("Missing the required parameter 'messageCCListenerAssignment' when calling saveCCListenerAssignment");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/messagesenders/CCListenerAssignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
