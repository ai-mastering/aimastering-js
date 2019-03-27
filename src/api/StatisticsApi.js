/**
 * AI Mastering API
 * This is a AI Mastering API document. You can use the mastering feature of [AI Mastering](https://aimastering.com) through this API.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: aimasteringcom@gmail.com
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
    define(['ApiClient', 'model/AnonymizedMastering', 'model/GroupBuyStatistics', 'model/Kpi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AnonymizedMastering'), require('../model/GroupBuyStatistics'), require('../model/Kpi'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.StatisticsApi = factory(root.Aimastering.ApiClient, root.Aimastering.AnonymizedMastering, root.Aimastering.GroupBuyStatistics, root.Aimastering.Kpi);
  }
}(this, function(ApiClient, AnonymizedMastering, GroupBuyStatistics, Kpi) {
  'use strict';

  /**
   * Statistics service.
   * @module api/StatisticsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new StatisticsApi. 
   * @alias module:api/StatisticsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getGroupBuyStatistics operation.
     * @callback module:api/StatisticsApi~getGroupBuyStatisticsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupBuyStatistics} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get group buy statistics.
     * @param {module:api/StatisticsApi~getGroupBuyStatisticsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GroupBuyStatistics}
     */
    this.getGroupBuyStatistics = function(callback) {
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
      var returnType = GroupBuyStatistics;

      return this.apiClient.callApi(
        '/statistics/group_buy', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listAnonymizedMasterings operation.
     * @callback module:api/StatisticsApi~listAnonymizedMasteringsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AnonymizedMastering>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get anonymized masterings.
     * @param {module:api/StatisticsApi~listAnonymizedMasteringsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AnonymizedMastering>}
     */
    this.listAnonymizedMasterings = function(callback) {
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
      var returnType = [AnonymizedMastering];

      return this.apiClient.callApi(
        '/statistics/anonymized_masterings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listKpis operation.
     * @callback module:api/StatisticsApi~listKpisCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Kpi} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get KPIs.
     * @param {module:api/StatisticsApi~listKpisCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Kpi}
     */
    this.listKpis = function(callback) {
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
      var returnType = Kpi;

      return this.apiClient.callApi(
        '/statistics/kpis', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));