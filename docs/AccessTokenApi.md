# Aimastering.AccessTokenApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessToken**](AccessTokenApi.md#createAccessToken) | **POST** /access_tokens | Create an API access token.


<a name="createAccessToken"></a>
# **createAccessToken**
> AccessToken createAccessToken()

Create an API access token.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.AccessTokenApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccessToken(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AccessToken**](AccessToken.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

