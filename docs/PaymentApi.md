# Aimastering.PaymentApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayment**](PaymentApi.md#createPayment) | **POST** /payments | Create a new payment.
[**executePayment**](PaymentApi.md#executePayment) | **PUT** /payments/{id}/execute | Execute a payment by id.
[**getPayment**](PaymentApi.md#getPayment) | **GET** /payments/{id} | Get a payment by id.
[**listPayments**](PaymentApi.md#listPayments) | **GET** /payments | Get all accessable payments.


<a name="createPayment"></a>
# **createPayment**
> Payment createPayment(productToken, service, opts)

Create a new payment.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.PaymentApi();

var productToken = "productToken_example"; // String | This parameter represents the product token.

var service = "service_example"; // String | This parameter represents the payment message.

var opts = { 
  'token': "token_example" // String | This parameter represents the card token. This parameter is effective only when the service is \"stripe\".
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPayment(productToken, service, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productToken** | **String**| This parameter represents the product token. | 
 **service** | **String**| This parameter represents the payment message. | 
 **token** | **String**| This parameter represents the card token. This parameter is effective only when the service is \&quot;stripe\&quot;. | [optional] 

### Return type

[**Payment**](Payment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="executePayment"></a>
# **executePayment**
> Payment executePayment(id, payerId)

Execute a payment by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.PaymentApi();

var id = 56; // Number | Payment id

var payerId = "payerId_example"; // String | This parameter represents the card token. This parameter is effective only when the service is \"paypal\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.executePayment(id, payerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Payment id | 
 **payerId** | **String**| This parameter represents the card token. This parameter is effective only when the service is \&quot;paypal\&quot;. | 

### Return type

[**Payment**](Payment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="getPayment"></a>
# **getPayment**
> Payment getPayment(id, )

Get a payment by id.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.PaymentApi();

var id = 56; // Number | Payment id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayment(id, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Payment id | 

### Return type

[**Payment**](Payment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPayments"></a>
# **listPayments**
> [Payment] listPayments()

Get all accessable payments.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPayments(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Payment]**](Payment.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

