/**
 * AI Mastering API
 * This is a AI Mastering API document. You can use the mastering feature of [AI Mastering](https://aimastering.com) through this API.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@bakuage.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/User'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.UserApi = factory(root.Aimastering.ApiClient, root.Aimastering.User);
  }
}(this, function(ApiClient, User) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.1.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getSelf operation.
     * @callback module:api/UserApi~getSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get self user.
     * @param {module:api/UserApi~getSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.getSelf = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/self', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the notifyRegistration operation.
     * @callback module:api/UserApi~notifyRegistrationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Notify user is registered.
     * @param {Object} opts Optional parameters
     * @param {String} opts.affiliateId The affiliate id of inviter.
     * @param {String} opts.referrerUrl The referrer URL.
     * @param {module:api/UserApi~notifyRegistrationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.notifyRegistration = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'affiliate_id': opts['affiliateId'],
        'referrer_url': opts['referrerUrl']
      };

      var authNames = ['bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/self/notify_registration', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendInvitation operation.
     * @callback module:api/UserApi~sendInvitationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send invitation.
     * @param {String} inviteeEmail The email of invitee.
     * @param {module:api/UserApi~sendInvitationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.sendInvitation = function(inviteeEmail, callback) {
      var postBody = null;

      // verify the required parameter 'inviteeEmail' is set
      if (inviteeEmail === undefined || inviteeEmail === null) {
        throw new Error("Missing the required parameter 'inviteeEmail' when calling sendInvitation");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'invitee_email': inviteeEmail
      };

      var authNames = ['bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/self/send_invitation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateSelf operation.
     * @callback module:api/UserApi~updateSelfCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update self user.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.agreedTermsOfService Whether you agreed terms of service.
     * @param {String} opts.email The email.
     * @param {module:api/UserApi~updateSelfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.updateSelf = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'agreed_terms_of_service': opts['agreedTermsOfService'],
        'email': opts['email']
      };

      var authNames = ['bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = User;

      return this.apiClient.callApi(
        '/users/self', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
