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
    define(['ApiClient', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.SubscriptionApi = factory(root.Aimastering.ApiClient, root.Aimastering.Subscription);
  }
}(this, function(ApiClient, Subscription) {
  'use strict';

  /**
   * Subscription service.
   * @module api/SubscriptionApi
   * @version 1.1.0
   */

  /**
   * Constructs a new SubscriptionApi. 
   * @alias module:api/SubscriptionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the cancelSubscription operation.
     * @callback module:api/SubscriptionApi~cancelSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a subscription by id.
     * @param {Number} id Subscription id
     * @param {module:api/SubscriptionApi~cancelSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.cancelSubscription = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelSubscription");
      }


      var pathParams = {
        'id': id
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{id}/cancel', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelSubscriptionCancellation operation.
     * @callback module:api/SubscriptionApi~cancelSubscriptionCancellationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel the subscription cancellation  by id.
     * @param {Number} id Subscription id
     * @param {module:api/SubscriptionApi~cancelSubscriptionCancellationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.cancelSubscriptionCancellation = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelSubscriptionCancellation");
      }


      var pathParams = {
        'id': id
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
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{id}/cancel_cancellation', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:api/SubscriptionApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new subscription.
     * @param {module:model/String} service This parameter represents the payment message.
     * @param {Object} opts Optional parameters
     * @param {String} opts.stripePlanId The Stripe plan id. This parameter is effective only when the service is \&quot;stripe\&quot;.
     * @param {String} opts.token This parameter represents the card token. This parameter is effective only when the service is \&quot;stripe\&quot;.
     * @param {String} opts.affiliateId Affiliate id of inviter user.
     * @param {module:api/SubscriptionApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.createSubscription = function(service, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling createSubscription");
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
        'service': service,
        'stripe_plan_id': opts['stripePlanId'],
        'token': opts['token'],
        'affiliate_id': opts['affiliateId']
      };

      var authNames = ['bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:api/SubscriptionApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a subscription by id.
     * @param {Number} id Subscription id
     * @param {module:api/SubscriptionApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.getSubscription = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscription");
      }


      var pathParams = {
        'id': id
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
      var returnType = Subscription;

      return this.apiClient.callApi(
        '/subscriptions/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSubscriptions operation.
     * @callback module:api/SubscriptionApi~listSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Subscription>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all accessable subscriptions.
     * @param {module:api/SubscriptionApi~listSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Subscription>}
     */
    this.listSubscriptions = function(callback) {
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
      var returnType = [Subscription];

      return this.apiClient.callApi(
        '/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
