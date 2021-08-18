# Aimastering.SpSubscriptionApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpSubscription**](SpSubscriptionApi.md#createSpSubscription) | **POST** /sp_subscriptions | Create a new smartphone subscription.
[**listSpSubscriptions**](SpSubscriptionApi.md#listSpSubscriptions) | **GET** /sp_subscriptions | Get all accessable smartphone subscriptions.


<a name="createSpSubscription"></a>
# **createSpSubscription**
> SpSubscription createSpSubscription(service, opts)

Create a new smartphone subscription.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SpSubscriptionApi();

var service = "service_example"; // String | Service.

var opts = { 
  'receipt': "receipt_example" // String | Base64 encoded app store receipt. This parameter is effective only when the service is \"appstore\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSpSubscription(service, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **String**| Service. | 
 **receipt** | **String**| Base64 encoded app store receipt. This parameter is effective only when the service is \&quot;appstore\&quot;. | [optional] 

### Return type

[**SpSubscription**](SpSubscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="listSpSubscriptions"></a>
# **listSpSubscriptions**
> [SpSubscription] listSpSubscriptions()

Get all accessable smartphone subscriptions.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SpSubscriptionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSpSubscriptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[SpSubscription]**](SpSubscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

