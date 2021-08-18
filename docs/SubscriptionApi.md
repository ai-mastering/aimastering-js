# Aimastering.SubscriptionApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelSubscription**](SubscriptionApi.md#cancelSubscription) | **PUT** /subscriptions/{id}/cancel | Cancel a subscription by id.
[**cancelSubscriptionCancellation**](SubscriptionApi.md#cancelSubscriptionCancellation) | **PUT** /subscriptions/{id}/cancel_cancellation | Cancel the subscription cancellation  by id.
[**createSubscription**](SubscriptionApi.md#createSubscription) | **POST** /subscriptions | Create a new subscription.
[**getSubscription**](SubscriptionApi.md#getSubscription) | **GET** /subscriptions/{id} | Get a subscription by id.
[**listSubscriptions**](SubscriptionApi.md#listSubscriptions) | **GET** /subscriptions | Get all accessable subscriptions.


<a name="cancelSubscription"></a>
# **cancelSubscription**
> Subscription cancelSubscription(id)

Cancel a subscription by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SubscriptionApi();

var id = 56; // Number | Subscription id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelSubscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subscription id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="cancelSubscriptionCancellation"></a>
# **cancelSubscriptionCancellation**
> Subscription cancelSubscriptionCancellation(id)

Cancel the subscription cancellation  by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SubscriptionApi();

var id = 56; // Number | Subscription id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelSubscriptionCancellation(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subscription id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createSubscription"></a>
# **createSubscription**
> Subscription createSubscription(service, opts)

Create a new subscription.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SubscriptionApi();

var service = "service_example"; // String | This parameter represents the payment message.

var opts = { 
  'stripePlanId': "stripePlanId_example", // String | The Stripe plan id. This parameter is effective only when the service is \"stripe\".
  'token': "token_example", // String | This parameter represents the card token. This parameter is effective only when the service is \"stripe\".
  'affiliateId': "affiliateId_example" // String | Affiliate id of inviter user.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSubscription(service, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service** | **String**| This parameter represents the payment message. | 
 **stripePlanId** | **String**| The Stripe plan id. This parameter is effective only when the service is \&quot;stripe\&quot;. | [optional] 
 **token** | **String**| This parameter represents the card token. This parameter is effective only when the service is \&quot;stripe\&quot;. | [optional] 
 **affiliateId** | **String**| Affiliate id of inviter user. | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getSubscription"></a>
# **getSubscription**
> Subscription getSubscription(id)

Get a subscription by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SubscriptionApi();

var id = 56; // Number | Subscription id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubscription(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Subscription id | 

### Return type

[**Subscription**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listSubscriptions"></a>
# **listSubscriptions**
> [Subscription] listSubscriptions()

Get all accessable subscriptions.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.SubscriptionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listSubscriptions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Subscription]**](Subscription.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

