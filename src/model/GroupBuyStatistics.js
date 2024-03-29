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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.GroupBuyStatistics = factory(root.Aimastering.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GroupBuyStatistics model module.
   * @module model/GroupBuyStatistics
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>GroupBuyStatistics</code>.
   * @alias module:model/GroupBuyStatistics
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GroupBuyStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupBuyStatistics} obj Optional instance to populate.
   * @return {module:model/GroupBuyStatistics} The populated <code>GroupBuyStatistics</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('premium_plan_subscribed_user_count')) {
        obj['premium_plan_subscribed_user_count'] = ApiClient.convertToType(data['premium_plan_subscribed_user_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} premium_plan_subscribed_user_count
   */
  exports.prototype['premium_plan_subscribed_user_count'] = undefined;



  return exports;
}));


