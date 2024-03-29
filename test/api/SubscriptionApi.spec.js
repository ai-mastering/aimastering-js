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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Aimastering);
  }
}(this, function(expect, Aimastering) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Aimastering.SubscriptionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SubscriptionApi', function() {
    describe('cancelSubscription', function() {
      it('should call cancelSubscription successfully', function(done) {
        //uncomment below and update the code to test cancelSubscription
        //instance.cancelSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelSubscriptionCancellation', function() {
      it('should call cancelSubscriptionCancellation successfully', function(done) {
        //uncomment below and update the code to test cancelSubscriptionCancellation
        //instance.cancelSubscriptionCancellation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSubscription', function() {
      it('should call createSubscription successfully', function(done) {
        //uncomment below and update the code to test createSubscription
        //instance.createSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscription', function() {
      it('should call getSubscription successfully', function(done) {
        //uncomment below and update the code to test getSubscription
        //instance.getSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listSubscriptions', function() {
      it('should call listSubscriptions successfully', function(done) {
        //uncomment below and update the code to test listSubscriptions
        //instance.listSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
