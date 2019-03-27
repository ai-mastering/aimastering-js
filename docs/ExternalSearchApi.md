# Aimastering.ExternalSearchApi

All URIs are relative to *https://bakuage.com:443/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchExternal**](ExternalSearchApi.md#searchExternal) | **GET** /external_search | Search external music and get name, url, thumbnails, etc.


<a name="searchExternal"></a>
# **searchExternal**
> ExternalSearchResult searchExternal(query, country)

Search external music and get name, url, thumbnails, etc.

### Example
```javascript
var Aimastering = require('aimastering');
var defaultClient = Aimastering.ApiClient.instance;

// Configure API key authorization: bearer
var bearer = defaultClient.authentications['bearer'];
bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//bearer.apiKeyPrefix = 'Token';

var apiInstance = new Aimastering.ExternalSearchApi();

var query = "query_example"; // String | Search query

var country = "country_example"; // String | Country ex. US, JP, etc


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchExternal(query, country, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| Search query | 
 **country** | **String**| Country ex. US, JP, etc | 

### Return type

[**ExternalSearchResult**](ExternalSearchResult.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

