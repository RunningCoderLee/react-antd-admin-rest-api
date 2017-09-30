# ReactAntdAdminRestApi.BillionairesApi

All URIs are relative to *http://localhost:30000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**billionairesGet**](BillionairesApi.md#billionairesGet) | **GET** /billionaires | list of the world&#39;s billionaires


<a name="billionairesGet"></a>
# **billionairesGet**
> [InlineResponse2001] billionairesGet()

list of the world&#39;s billionaires

get top ten billionaires in the world

### Example
```javascript
import ReactAntdAdminRestApi from 'react_antd_admin_rest_api';
let defaultClient = ReactAntdAdminRestApi.ApiClient.instance;

// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';

let apiInstance = new ReactAntdAdminRestApi.BillionairesApi();
apiInstance.billionairesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse2001]**](InlineResponse2001.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

