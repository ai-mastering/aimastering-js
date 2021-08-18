# Aimastering.PaymentCustomerApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDefaultPaymentCustomer**](PaymentCustomerApi.md#getDefaultPaymentCustomer) | **GET** /payment_customers/default | Get a default payment customer.


<a name="getDefaultPaymentCustomer"></a>
# **getDefaultPaymentCustomer**
> [PaymentCustomer] getDefaultPaymentCustomer()

Get a default payment customer.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.PaymentCustomerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDefaultPaymentCustomer(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PaymentCustomer]**](PaymentCustomer.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

