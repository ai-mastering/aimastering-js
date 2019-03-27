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
    instance = new Aimastering.AudioApi();
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

  describe('AudioApi', function() {
    describe('createAudio', function() {
      it('should call createAudio successfully', function(done) {
        //uncomment below and update the code to test createAudio
        //instance.createAudio(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadAudio', function() {
      it('should call downloadAudio successfully', function(done) {
        //uncomment below and update the code to test downloadAudio
        //instance.downloadAudio(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('downloadAudioByToken', function() {
      it('should call downloadAudioByToken successfully', function(done) {
        //uncomment below and update the code to test downloadAudioByToken
        //instance.downloadAudioByToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAudio', function() {
      it('should call getAudio successfully', function(done) {
        //uncomment below and update the code to test getAudio
        //instance.getAudio(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAudioAnalysis', function() {
      it('should call getAudioAnalysis successfully', function(done) {
        //uncomment below and update the code to test getAudioAnalysis
        //instance.getAudioAnalysis(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAudioDownloadToken', function() {
      it('should call getAudioDownloadToken successfully', function(done) {
        //uncomment below and update the code to test getAudioDownloadToken
        //instance.getAudioDownloadToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAudios', function() {
      it('should call listAudios successfully', function(done) {
        //uncomment below and update the code to test listAudios
        //instance.listAudios(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));