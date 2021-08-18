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
    define(['ApiClient', 'model/UserStatistics'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserStatistics'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.User = factory(root.Aimastering.ApiClient, root.Aimastering.UserStatistics);
  }
}(this, function(ApiClient, UserStatistics) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('affiliate_enabled')) {
        obj['affiliate_enabled'] = ApiClient.convertToType(data['affiliate_enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('agreed_terms_of_service')) {
        obj['agreed_terms_of_service'] = ApiClient.convertToType(data['agreed_terms_of_service'], 'Boolean');
      }
      if (data.hasOwnProperty('auth_id')) {
        obj['auth_id'] = ApiClient.convertToType(data['auth_id'], 'String');
      }
      if (data.hasOwnProperty('auth_provider')) {
        obj['auth_provider'] = ApiClient.convertToType(data['auth_provider'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('registration_notified')) {
        obj['registration_notified'] = ApiClient.convertToType(data['registration_notified'], 'Boolean');
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = UserStatistics.constructFromObject(data['statistics']);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} affiliate_enabled
   */
  exports.prototype['affiliate_enabled'] = undefined;
  /**
   * @member {Boolean} agreed_terms_of_service
   */
  exports.prototype['agreed_terms_of_service'] = undefined;
  /**
   * @member {String} auth_id
   */
  exports.prototype['auth_id'] = undefined;
  /**
   * @member {module:model/User.AuthProviderEnum} auth_provider
   */
  exports.prototype['auth_provider'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} registration_notified
   */
  exports.prototype['registration_notified'] = undefined;
  /**
   * @member {module:model/UserStatistics} statistics
   */
  exports.prototype['statistics'] = undefined;
  /**
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;


  /**
   * Allowed values for the <code>auth_provider</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AuthProviderEnum = {
    /**
     * value: "auth0"
     * @const
     */
    "auth0": "auth0",
    /**
     * value: "github"
     * @const
     */
    "github": "github",
    /**
     * value: "google"
     * @const
     */
    "google": "google",
    /**
     * value: "twitter"
     * @const
     */
    "twitter": "twitter"  };


  return exports;
}));


