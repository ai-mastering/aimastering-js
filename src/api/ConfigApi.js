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
    define(['ApiClient', 'model/Config'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Config'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.ConfigApi = factory(root.Aimastering.ApiClient, root.Aimastering.Config);
  }
}(this, function(ApiClient, Config) {
  'use strict';

  /**
   * Config service.
   * @module api/ConfigApi
   * @version 1.1.0
   */

  /**
   * Constructs a new ConfigApi. 
   * @alias module:api/ConfigApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getConfig operation.
     * @callback module:api/ConfigApi~getConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Config} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get config.
     * @param {module:api/ConfigApi~getConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Config}
     */
    this.getConfig = function(callback) {
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
      var returnType = Config;

      return this.apiClient.callApi(
        '/config', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
