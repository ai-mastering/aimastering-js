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
    define(['ApiClient', 'model/ExternalSearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ExternalSearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.ExternalSearchApi = factory(root.Aimastering.ApiClient, root.Aimastering.ExternalSearchResult);
  }
}(this, function(ApiClient, ExternalSearchResult) {
  'use strict';

  /**
   * ExternalSearch service.
   * @module api/ExternalSearchApi
   * @version 1.1.0
   */

  /**
   * Constructs a new ExternalSearchApi. 
   * @alias module:api/ExternalSearchApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the searchExternal operation.
     * @callback module:api/ExternalSearchApi~searchExternalCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExternalSearchResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search external music and get name, url, thumbnails, etc.
     * @param {String} query Search query
     * @param {String} country Country ex. US, JP, etc
     * @param {module:api/ExternalSearchApi~searchExternalCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExternalSearchResult}
     */
    this.searchExternal = function(query, country, callback) {
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchExternal");
      }

      // verify the required parameter 'country' is set
      if (country === undefined || country === null) {
        throw new Error("Missing the required parameter 'country' when calling searchExternal");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
        'country': country,
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
      var returnType = ExternalSearchResult;

      return this.apiClient.callApi(
        '/external_search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
