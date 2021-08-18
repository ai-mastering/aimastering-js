# Aimastering.LibraryAudioApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLibraryAudio**](LibraryAudioApi.md#createLibraryAudio) | **POST** /library_audios | Create a new library audio.
[**createLibraryAudioLike**](LibraryAudioApi.md#createLibraryAudioLike) | **POST** /library_audios/{id}/like | Create a new library audio like.
[**deleteLibraryAudio**](LibraryAudioApi.md#deleteLibraryAudio) | **DELETE** /library_audios/{id} | Delete library audio.
[**getLibraryAudio**](LibraryAudioApi.md#getLibraryAudio) | **GET** /library_audios/{id} | Get a library audio by id.
[**getLibraryAudioAnalysis**](LibraryAudioApi.md#getLibraryAudioAnalysis) | **GET** /library_audios/{id}/analysis | Get a library audio analysis by id.
[**listLibraryAudios**](LibraryAudioApi.md#listLibraryAudios) | **GET** /library_audios | Get all library audios accessable.
[**updateLibraryAudio**](LibraryAudioApi.md#updateLibraryAudio) | **PUT** /library_audios/{id} | Update library audio.


<a name="createLibraryAudio"></a>
# **createLibraryAudio**
> LibraryAudio createLibraryAudio(opts)

Create a new library audio.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var opts = { 
  'file': "/path/to/file.txt" // File | The file to upload.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLibraryAudio(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The file to upload. | [optional] 

### Return type

[**LibraryAudio**](LibraryAudio.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createLibraryAudioLike"></a>
# **createLibraryAudioLike**
> LibraryAudioLike createLibraryAudioLike(id)

Create a new library audio like.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var id = 56; // Number | Library audio id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLibraryAudioLike(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Library audio id | 

### Return type

[**LibraryAudioLike**](LibraryAudioLike.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteLibraryAudio"></a>
# **deleteLibraryAudio**
> LibraryAudio deleteLibraryAudio(id)

Delete library audio.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var id = 56; // Number | Library audio id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLibraryAudio(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Library audio id | 

### Return type

[**LibraryAudio**](LibraryAudio.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getLibraryAudio"></a>
# **getLibraryAudio**
> LibraryAudio getLibraryAudio(id)

Get a library audio by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var id = 56; // Number | Library audio id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLibraryAudio(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Library audio id | 

### Return type

[**LibraryAudio**](LibraryAudio.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getLibraryAudioAnalysis"></a>
# **getLibraryAudioAnalysis**
> LibraryAudioAnalysis getLibraryAudioAnalysis(id)

Get a library audio analysis by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var id = 56; // Number | Library audio id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLibraryAudioAnalysis(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Library audio id | 

### Return type

[**LibraryAudioAnalysis**](LibraryAudioAnalysis.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listLibraryAudios"></a>
# **listLibraryAudios**
> [LibraryAudio] listLibraryAudios()

Get all library audios accessable.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLibraryAudios(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LibraryAudio]**](LibraryAudio.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateLibraryAudio"></a>
# **updateLibraryAudio**
> LibraryAudio updateLibraryAudio(id, opts)

Update library audio.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.LibraryAudioApi();

var id = 56; // Number | Library audio id

var opts = { 
  'isPublic': true // Boolean | Whether the library audio is public.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLibraryAudio(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Library audio id | 
 **isPublic** | **Boolean**| Whether the library audio is public. | [optional] 

### Return type

[**LibraryAudio**](LibraryAudio.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

