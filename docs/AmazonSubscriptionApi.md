# Aimastering.AmazonSubscriptionApi

All URIs are relative to *https://bakuage.com:443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAmazonSubscriptions**](AmazonSubscriptionApi.md#listAmazonSubscriptions) | **GET** /amazon_subscriptions | Get all accessable amazon subscriptions.


<a name="listAmazonSubscriptions"></a>
# **listAmazonSubscriptions**
> [AmazonSubscription] listAmazonSubscriptions()

Get all accessable amazon subscriptions.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.AmazonSubscriptionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAmazonSubscriptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AmazonSubscription]**](AmazonSubscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

