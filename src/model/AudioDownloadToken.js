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
    define(['ApiClient', 'model/JWT'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./JWT'));
  } else {
    // Browser globals (root is window)
    if (!root.Aimastering) {
      root.Aimastering = {};
    }
    root.Aimastering.AudioDownloadToken = factory(root.Aimastering.ApiClient, root.Aimastering.JWT);
  }
}(this, function(ApiClient, JWT) {
  'use strict';




  /**
   * The AudioDownloadToken model module.
   * @module model/AudioDownloadToken
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>AudioDownloadToken</code>.
   * @alias module:model/AudioDownloadToken
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AudioDownloadToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AudioDownloadToken} obj Optional instance to populate.
   * @return {module:model/AudioDownloadToken} The populated <code>AudioDownloadToken</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('download_token')) {
        obj['download_token'] = JWT.constructFromObject(data['download_token']);
      }
      if (data.hasOwnProperty('download_url')) {
        obj['download_url'] = ApiClient.convertToType(data['download_url'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/JWT} download_token
   */
  exports.prototype['download_token'] = undefined;
  /**
   * @member {String} download_url
   */
  exports.prototype['download_url'] = undefined;



  return exports;
}));

