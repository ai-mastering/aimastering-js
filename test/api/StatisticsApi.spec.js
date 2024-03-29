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
    instance = new Aimastering.StatisticsApi();
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

  describe('StatisticsApi', function() {
    describe('getGroupBuyStatistics', function() {
      it('should call getGroupBuyStatistics successfully', function(done) {
        //uncomment below and update the code to test getGroupBuyStatistics
        //instance.getGroupBuyStatistics(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAnonymizedMasterings', function() {
      it('should call listAnonymizedMasterings successfully', function(done) {
        //uncomment below and update the code to test listAnonymizedMasterings
        //instance.listAnonymizedMasterings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listKpis', function() {
      it('should call listKpis successfully', function(done) {
        //uncomment below and update the code to test listKpis
        //instance.listKpis(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
