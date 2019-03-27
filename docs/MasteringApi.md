# Aimastering.MasteringApi

All URIs are relative to *https://bakuage.com:443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelMastering**](MasteringApi.md#cancelMastering) | **PUT** /masterings/{id}/cancel | Cancel a mastering by id.
[**createMastering**](MasteringApi.md#createMastering) | **POST** /masterings | Create a new mastering.
[**deleteMastering**](MasteringApi.md#deleteMastering) | **DELETE** /masterings/{id} | Delete mastering.
[**freeUnlockMastering**](MasteringApi.md#freeUnlockMastering) | **PUT** /masterings/{id}/free_unlock | Free unlock a mastering by id.
[**getMastering**](MasteringApi.md#getMastering) | **GET** /masterings/{id} | Get a mastering by id.
[**getMasteringUnlockProduct**](MasteringApi.md#getMasteringUnlockProduct) | **GET** /masterings/{id}/unlock_product | Review a mastering by id.
[**listMasterings**](MasteringApi.md#listMasterings) | **GET** /masterings | Get all accessable masterings.
[**publishMastering**](MasteringApi.md#publishMastering) | **POST** /masterings/{id}/publish | Publish a mastering by id.
[**reviewMastering**](MasteringApi.md#reviewMastering) | **PUT** /masterings/{id}/review | Review a mastering by id.
[**updateMastering**](MasteringApi.md#updateMastering) | **PUT** /masterings/{id} | Update a mastering.


<a name="cancelMastering"></a>
# **cancelMastering**
> Mastering cancelMastering(id, )

Cancel a mastering by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelMastering(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createMastering"></a>
# **createMastering**
> Mastering createMastering(inputAudioId, opts)

Create a new mastering.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var inputAudioId = 56; // Number | Input audio id

var opts = { 
  'mode': "default", // String | Mode
  'bassPreservation': false, // Boolean | This parameter represents if the bass preservation is enabled.
  'mastering': false, // Boolean | This parameter represents if the mastering is enabled. This parameter is effective only when the mode is \"default\" or \"custom\".
  'masteringAlgorithm': "v2", // String | 
  'noiseReduction': false, // Boolean | This parameter represents if the nosie reduction is enabled. This parameter is effective only when the mode is \"custom\".
  'preset': "general", // String | This parameter is effective only when the mode is \"custom\".
  'targetLoudness': -5, // Number | This parameter represents the target loudness of the output audio in dB. This parameter is effective only when the mode is \"custom\".
  'targetLoudnessMode': "loudness", // String | 
  'masteringMatchingLevel': 0.5, // Number | This parameter represents the mastering reference matching level. This parameter is effective only when the mode is \"custom\" and the mastering is enabled.
  'masteringReverb': false, // Boolean | This parameter represents if the mastering reverb is enabled. This parameter is effective only when the mode is \"custom\" and the mastering is enabled.
  'masteringReverbGain': -36, // Number | This parameter represents the mastering reverb gain relative to the dry sound in dB. This parameter is effective only when the mode is \"custom\" and the mastering is \"true\" and the mastering_reverb is \"true\".
  'referenceAudioId': 56, // Number | Reference audio id. This parameter is effective only when the mode is \"custom\" and the mastering is enabled.
  'lowCutFreq': 20, // Number | This parameter represents the low cut freq  of the output audio in Hz. This parameter is effective only when the mode is \"custom\".
  'highCutFreq': 20000, // Number | This parameter represents the high cut freq of the output audio in Hz. This parameter is effective only when the mode is \"custom\".
  'ceiling': 0, // Number | 
  'ceilingMode': "0", // String | 
  'oversample': 1, // Number | 
  'sampleRate': 44100, // Number | This parameter represents the sample rate of the output audio in dB. This parameter is effective only when the mode is \"custom\".
  'bitDepth': 16, // Number | This parameter represents the bit depth of the output audio in dB. This parameter is effective only when the mode is \"custom\".
  'outputFormat': "wav", // String | This parameter represents the format of the output audio. This parameter is effective only when the mode is \"custom\".
  'forPreview': false, // Boolean | If this is true, the mastering is treated for preview purpose (ex. not purchasable, not publishable, short lifetime). 
  'startAt': 0, // Number | Partial mastering start at. 
  'endAt': -1, // Number | Partial mastering end at. 
  'videoTitle': "" // String | This parameter represents the title of output video.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createMastering(inputAudioId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputAudioId** | **Number**| Input audio id | 
 **mode** | **String**| Mode | [optional] [default to default]
 **bassPreservation** | **Boolean**| This parameter represents if the bass preservation is enabled. | [optional] [default to false]
 **mastering** | **Boolean**| This parameter represents if the mastering is enabled. This parameter is effective only when the mode is \&quot;default\&quot; or \&quot;custom\&quot;. | [optional] [default to false]
 **masteringAlgorithm** | **String**|  | [optional] [default to v2]
 **noiseReduction** | **Boolean**| This parameter represents if the nosie reduction is enabled. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to false]
 **preset** | **String**| This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to general]
 **targetLoudness** | **Number**| This parameter represents the target loudness of the output audio in dB. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to -5]
 **targetLoudnessMode** | **String**|  | [optional] [default to loudness]
 **masteringMatchingLevel** | **Number**| This parameter represents the mastering reference matching level. This parameter is effective only when the mode is \&quot;custom\&quot; and the mastering is enabled. | [optional] [default to 0.5]
 **masteringReverb** | **Boolean**| This parameter represents if the mastering reverb is enabled. This parameter is effective only when the mode is \&quot;custom\&quot; and the mastering is enabled. | [optional] [default to false]
 **masteringReverbGain** | **Number**| This parameter represents the mastering reverb gain relative to the dry sound in dB. This parameter is effective only when the mode is \&quot;custom\&quot; and the mastering is \&quot;true\&quot; and the mastering_reverb is \&quot;true\&quot;. | [optional] [default to -36]
 **referenceAudioId** | **Number**| Reference audio id. This parameter is effective only when the mode is \&quot;custom\&quot; and the mastering is enabled. | [optional] 
 **lowCutFreq** | **Number**| This parameter represents the low cut freq  of the output audio in Hz. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to 20]
 **highCutFreq** | **Number**| This parameter represents the high cut freq of the output audio in Hz. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to 20000]
 **ceiling** | **Number**|  | [optional] [default to 0]
 **ceilingMode** | **String**|  | [optional] [default to 0]
 **oversample** | **Number**|  | [optional] [default to 1]
 **sampleRate** | **Number**| This parameter represents the sample rate of the output audio in dB. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to 44100]
 **bitDepth** | **Number**| This parameter represents the bit depth of the output audio in dB. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to 16]
 **outputFormat** | **String**| This parameter represents the format of the output audio. This parameter is effective only when the mode is \&quot;custom\&quot;. | [optional] [default to wav]
 **forPreview** | **Boolean**| If this is true, the mastering is treated for preview purpose (ex. not purchasable, not publishable, short lifetime).  | [optional] [default to false]
 **startAt** | **Number**| Partial mastering start at.  | [optional] [default to 0]
 **endAt** | **Number**| Partial mastering end at.  | [optional] [default to -1]
 **videoTitle** | **String**| This parameter represents the title of output video. | [optional] [default to ]

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteMastering"></a>
# **deleteMastering**
> Mastering deleteMastering(id, )

Delete mastering.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteMastering(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="freeUnlockMastering"></a>
# **freeUnlockMastering**
> Mastering freeUnlockMastering(id, )

Free unlock a mastering by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.freeUnlockMastering(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMastering"></a>
# **getMastering**
> Mastering getMastering(id, )

Get a mastering by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMastering(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMasteringUnlockProduct"></a>
# **getMasteringUnlockProduct**
> Mastering getMasteringUnlockProduct(id, )

Review a mastering by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMasteringUnlockProduct(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMasterings"></a>
# **listMasterings**
> [Mastering] listMasterings()

Get all accessable masterings.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMasterings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Mastering]**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="publishMastering"></a>
# **publishMastering**
> Mastering publishMastering(id, accessToken, message, opts)

Publish a mastering by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id

var accessToken = "accessToken_example"; // String | This parameter represents if the access token of the publishment service API.

var message = "message_example"; // String | This parameter represents the publishment message.

var opts = { 
  'service': "service_example", // String | This parameter represents the publishment service.
  'accessTokenSecret': "accessTokenSecret_example" // String | This parameter represents the access token secret of the publishment service API. This parameter is effective only when the service is \"twitter\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.publishMastering(id, accessToken, message, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 
 **accessToken** | **String**| This parameter represents if the access token of the publishment service API. | 
 **message** | **String**| This parameter represents the publishment message. | 
 **service** | **String**| This parameter represents the publishment service. | [optional] 
 **accessTokenSecret** | **String**| This parameter represents the access token secret of the publishment service API. This parameter is effective only when the service is \&quot;twitter\&quot;. | [optional] 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="reviewMastering"></a>
# **reviewMastering**
> Mastering reviewMastering(id, , opts)

Review a mastering by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id

var opts = { 
  'reviewComment': "reviewComment_example", // String | This parameter represents the review comment.
  'reviewScore': 8.14 // Number | This parameter represents the review score.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reviewMastering(id, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 
 **reviewComment** | **String**| This parameter represents the review comment. | [optional] 
 **reviewScore** | **Number**| This parameter represents the review score. | [optional] 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="updateMastering"></a>
# **updateMastering**
> Mastering updateMastering(id, , opts)

Update a mastering.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.MasteringApi();

var id = 56; // Number | Mastering id

var opts = { 
  'preserved': true // Boolean | Disable auto delete.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMastering(id, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Mastering id | 
 **preserved** | **Boolean**| Disable auto delete. | [optional] 

### Return type

[**Mastering**](Mastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

