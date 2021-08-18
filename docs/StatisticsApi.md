# Aimastering.StatisticsApi

All URIs are relative to *https://api.bakuage.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroupBuyStatistics**](StatisticsApi.md#getGroupBuyStatistics) | **GET** /statistics/group_buy | Get group buy statistics.
[**listAnonymizedMasterings**](StatisticsApi.md#listAnonymizedMasterings) | **GET** /statistics/anonymized_masterings | Get anonymized masterings.
[**listKpis**](StatisticsApi.md#listKpis) | **GET** /statistics/kpis | Get KPIs.


<a name="getGroupBuyStatistics"></a>
# **getGroupBuyStatistics**
> GroupBuyStatistics getGroupBuyStatistics()

Get group buy statistics.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.StatisticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupBuyStatistics(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**GroupBuyStatistics**](GroupBuyStatistics.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAnonymizedMasterings"></a>
# **listAnonymizedMasterings**
> [AnonymizedMastering] listAnonymizedMasterings()

Get anonymized masterings.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.StatisticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAnonymizedMasterings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[AnonymizedMastering]**](AnonymizedMastering.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listKpis"></a>
# **listKpis**
> Kpi listKpis()

Get KPIs.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.StatisticsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listKpis(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Kpi**](Kpi.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

