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
    define(['ApiClient', 'model/ListUserGroup', 'model/ListUserGroupAssignment', 'model/UserGroup', 'model/UserGroupAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListUserGroup'), require('../model/ListUserGroupAssignment'), require('../model/UserGroup'), require('../model/UserGroupAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.SupplierUserGroups = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListUserGroup, root.OrderCloud.ListUserGroupAssignment, root.OrderCloud.UserGroup, root.OrderCloud.UserGroupAssignment);
  }
}(this, function(ApiClient, ListUserGroup, ListUserGroupAssignment, UserGroup, UserGroupAssignment) {
  'use strict';

  /**
   * SupplierUserGroup service.
   * @module api/SupplierUserGroups
   * @version 2.0.1
   */

  /**
   * Constructs a new SupplierUserGroups. 
   * @alias module:api/SupplierUserGroups
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/UserGroup} userGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Create = function(supplierID, userGroup) {
      var postBody = userGroup;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Create");
      }

      // verify the required parameter 'userGroup' is set
      if (userGroup == undefined || userGroup == null) {
        throw new Error("Missing the required parameter 'userGroup' when calling Create");
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/usergroups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(supplierID, userGroupID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Delete");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Delete");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userGroupID': userGroupID
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
        '/suppliers/{supplierID}/usergroups/{userGroupID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userGroupID ID of the user group.
     * @param {String} userID ID of the user.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteUserAssignment = function(supplierID, userGroupID, userID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling DeleteUserAssignment");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling DeleteUserAssignment");
      }

      // verify the required parameter 'userID' is set
      if (userID == undefined || userID == null) {
        throw new Error("Missing the required parameter 'userID' when calling DeleteUserAssignment");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userGroupID': userGroupID,
        'userID': userID
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
        '/suppliers/{supplierID}/usergroups/{userGroupID}/assignments/{userID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Get = function(supplierID, userGroupID) {
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Get");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Get");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/usergroups/{userGroupID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroup}
     */
    this.List = function(supplierID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling List");
      }


      var pathParams = {
        'supplierID': supplierID
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
      var returnType = ListUserGroup;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/usergroups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.userID ID of the user.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListUserGroupAssignment}
     */
    this.ListUserAssignments = function(supplierID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling ListUserAssignments");
      }


      var pathParams = {
        'supplierID': supplierID
      };
      var queryParams = {
        'userGroupID': opts['userGroupID'],
        'userID': opts['userID'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListUserGroupAssignment;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/usergroups/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} partialUserGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Patch = function(supplierID, userGroupID, partialUserGroup) {
      var postBody = partialUserGroup;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Patch");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Patch");
      }

      // verify the required parameter 'partialUserGroup' is set
      if (partialUserGroup == undefined || partialUserGroup == null) {
        throw new Error("Missing the required parameter 'partialUserGroup' when calling Patch");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/usergroups/{userGroupID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {String} userGroupID ID of the user group.
     * @param {module:model/UserGroup} userGroup 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UserGroup}
     */
    this.Save = function(supplierID, userGroupID, userGroup) {
      var postBody = userGroup;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling Save");
      }

      // verify the required parameter 'userGroupID' is set
      if (userGroupID == undefined || userGroupID == null) {
        throw new Error("Missing the required parameter 'userGroupID' when calling Save");
      }

      // verify the required parameter 'userGroup' is set
      if (userGroup == undefined || userGroup == null) {
        throw new Error("Missing the required parameter 'userGroup' when calling Save");
      }


      var pathParams = {
        'supplierID': supplierID,
        'userGroupID': userGroupID
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
      var returnType = UserGroup;

      return this.apiClient.callApi(
        '/suppliers/{supplierID}/usergroups/{userGroupID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} supplierID ID of the supplier.
     * @param {module:model/UserGroupAssignment} userGroupAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveUserAssignment = function(supplierID, userGroupAssignment) {
      var postBody = userGroupAssignment;

      // verify the required parameter 'supplierID' is set
      if (supplierID == undefined || supplierID == null) {
        throw new Error("Missing the required parameter 'supplierID' when calling SaveUserAssignment");
      }

      // verify the required parameter 'userGroupAssignment' is set
      if (userGroupAssignment == undefined || userGroupAssignment == null) {
        throw new Error("Missing the required parameter 'userGroupAssignment' when calling SaveUserAssignment");
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
        '/suppliers/{supplierID}/usergroups/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
