# Aimastering.UserApi

All URIs are relative to *https://aimastering.com:443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSelf**](UserApi.md#getSelf) | **GET** /users/self | Get self user.
[**updateSelf**](UserApi.md#updateSelf) | **PUT** /users/self | Update self user.


<a name="getSelf"></a>
# **getSelf**
> User getSelf()

Get self user.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.UserApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSelf(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateSelf"></a>
# **updateSelf**
> User updateSelf(opts)

Update self user.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.UserApi();

var opts = { 
  'agreedTermsOfService': true, // Boolean | Whether you agreed terms of service.
  'email': "email_example" // String | The email.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSelf(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agreedTermsOfService** | **Boolean**| Whether you agreed terms of service. | [optional] 
 **email** | **String**| The email. | [optional] 

### Return type

[**User**](User.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

