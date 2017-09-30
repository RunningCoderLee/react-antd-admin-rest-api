# ReactAntdAdminRestApi.AuthenticationApi

All URIs are relative to *http://localhost:30000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postAuthentication**](AuthenticationApi.md#postAuthentication) | **POST** /authentication | post username and password


<a name="postAuthentication"></a>
# **postAuthentication**
> InlineResponse200 postAuthentication(userInfo)

post username and password

Will send the authenticated user info if authentication is succesful, otherwise it will send &#x60;Authentication failed&#x60;

### Example
```javascript
import ReactAntdAdminRestApi from 'react_antd_admin_rest_api';

let apiInstance = new ReactAntdAdminRestApi.AuthenticationApi();

let userInfo = new ReactAntdAdminRestApi.UserInfo(); // UserInfo | user info for authenticate

apiInstance.postAuthentication(userInfo).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInfo** | [**UserInfo**](UserInfo.md)| user info for authenticate | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain, text/html

