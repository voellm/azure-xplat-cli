// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '3ca49042-782a-4cc9-89b5-ee1b487fe115',
    name: 'AzSdkCore1',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1449d5b7-8a83-47db-ae4c-9b03e888bad0',
    registeredProviders: ['website'],
    registeredResourceNamespaces: ['microsoft.insights', 'successbricks.cleardb', 'microsoft.web'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'South Central US';
}

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '296b534fe3e175599b686cb7f1db1b50',
  date: 'Thu, 12 Mar 2015 18:29:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceGroupTag2294?api-version=2014-04-01-preview')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceGroupTag2294/\",\"tagName\":\"xplatResourceGroupTag2294\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1176',
  'x-ms-request-id': 'f30ceeaf-9ec0-4cf8-919e-d320a7e52f9c',
  'x-ms-correlation-request-id': 'f30ceeaf-9ec0-4cf8-919e-d320a7e52f9c',
  'x-ms-routing-request-id': 'WESTUS:20150312T182905Z:f30ceeaf-9ec0-4cf8-919e-d320a7e52f9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:05 GMT',
  'content-length': '181' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '4ed4a47bacab7910b8b6eb09cc30080a',
  date: 'Thu, 12 Mar 2015 18:29:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames?api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceGroupTag8580/\",\"tagName\":\"xplatResourceGroupTag8580\",\"count\":{\"type\":\"Total\",\"value\":1},\"values\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceGroupTag8580/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":1}}]},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag4974/\",\"tagName\":\"xplatResourceTag4974\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag4974/tagValues/fooValue\",\"tagValue\":\"fooValue\",\"count\":{\"type\":\"Total\",\"value\":0}}]},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceGroupTag2294/\",\"tagName\":\"xplatResourceGroupTag2294\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]},{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/tagNames/xplatResourceTag7395/\",\"tagName\":\"xplatResourceTag7395\",\"count\":{\"type\":\"Total\",\"value\":0},\"values\":[]}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31969',
  'x-ms-request-id': 'a6626aa5-3691-4035-90eb-4dffdf4c1919',
  'x-ms-correlation-request-id': 'a6626aa5-3691-4035-90eb-4dffdf4c1919',
  'x-ms-routing-request-id': 'WESTUS:20150312T182906Z:a6626aa5-3691-4035-90eb-4dffdf4c1919',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:05 GMT',
  'content-length': '1056' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5ae68bd0f2eb721c8bd84ca33e81dd34',
  date: 'Thu, 12 Mar 2015 18:29:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xplatResourceGroupTagGrp4656' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-request-id': 'be64842f-eb89-4e4c-8b18-1d214860f41e',
  'x-ms-correlation-request-id': 'be64842f-eb89-4e4c-8b18-1d214860f41e',
  'x-ms-routing-request-id': 'WESTUS:20150312T182907Z:be64842f-eb89-4e4c-8b18-1d214860f41e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:06 GMT',
  'content-length': '120' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '13915b6dc8187d49baa34fe8f7f56c4b',
  date: 'Thu, 12 Mar 2015 18:29:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview', '*')
  .reply(201, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceGroupTagGrp4656\",\"name\":\"xplatResourceGroupTagGrp4656\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '227',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1175',
  'x-ms-request-id': '446086ae-8d9a-4439-82f8-08bc025b874a',
  'x-ms-correlation-request-id': '446086ae-8d9a-4439-82f8-08bc025b874a',
  'x-ms-routing-request-id': 'WESTUS:20150312T182908Z:446086ae-8d9a-4439-82f8-08bc025b874a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:08 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'fff91b2c306079a5b505014e7bb85f70',
  date: 'Thu, 12 Mar 2015 18:29:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceGroupTagGrp4656\",\"name\":\"xplatResourceGroupTagGrp4656\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31968',
  'x-ms-request-id': '0bca6f46-6ecc-45f4-b1a7-2cec4aa1955d',
  'x-ms-correlation-request-id': '0bca6f46-6ecc-45f4-b1a7-2cec4aa1955d',
  'x-ms-routing-request-id': 'WESTUS:20150312T182909Z:0bca6f46-6ecc-45f4-b1a7-2cec4aa1955d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:09 GMT',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'ef81d3d5e0c874fbaa123bf4ecc12290',
  date: 'Thu, 12 Mar 2015 18:29:09 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceGroupTagGrp4656\",\"name\":\"xplatResourceGroupTagGrp4656\",\"location\":\"southcentralus\",\"tags\":{\"xplatResourceGroupTag2294\":\"\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '257',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1177',
  'x-ms-request-id': '4a734f53-85f2-4f91-9f2c-b90cf94a3f9c',
  'x-ms-correlation-request-id': '4a734f53-85f2-4f91-9f2c-b90cf94a3f9c',
  'x-ms-routing-request-id': 'WESTUS:20150312T182910Z:4a734f53-85f2-4f91-9f2c-b90cf94a3f9c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '863259477a787d529740a23be0963914',
  date: 'Thu, 12 Mar 2015 18:29:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups?$filter=tagname%20eq%20%27xplatResourceGroupTag2294%27&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceGroupTagGrp4656\",\"name\":\"xplatResourceGroupTagGrp4656\",\"location\":\"southcentralus\",\"tags\":{\"xplatResourceGroupTag2294\":\"\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31980',
  'x-ms-request-id': '126f7296-fa00-4180-93bf-33611c9c1186',
  'x-ms-correlation-request-id': '126f7296-fa00-4180-93bf-33611c9c1186',
  'x-ms-routing-request-id': 'WESTUS:20150312T182911Z:126f7296-fa00-4180-93bf-33611c9c1186',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:11 GMT',
  'content-length': '269' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '5f6d8c0fad5974b8b42841acefd8d8fd',
  date: 'Thu, 12 Mar 2015 18:29:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceGroupTagGrp4656\",\"name\":\"xplatResourceGroupTagGrp4656\",\"location\":\"southcentralus\",\"tags\":{\"xplatResourceGroupTag2294\":\"\"},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31967',
  'x-ms-request-id': '9898c54f-941b-4f27-8e41-f7ed3f0a6e6d',
  'x-ms-correlation-request-id': '9898c54f-941b-4f27-8e41-f7ed3f0a6e6d',
  'x-ms-routing-request-id': 'WESTUS:20150312T182912Z:9898c54f-941b-4f27-8e41-f7ed3f0a6e6d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:11 GMT',
  'content-length': '257' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '8214309cddc272fb971862955ac6e17f',
  date: 'Thu, 12 Mar 2015 18:29:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview', '*')
  .reply(200, "{\"id\":\"/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourceGroups/xplatResourceGroupTagGrp4656\",\"name\":\"xplatResourceGroupTagGrp4656\",\"location\":\"southcentralus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '227',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1176',
  'x-ms-request-id': '07b3482d-6768-47b0-8cdc-a8abbc971d90',
  'x-ms-correlation-request-id': '07b3482d-6768-47b0-8cdc-a8abbc971d90',
  'x-ms-routing-request-id': 'WESTUS:20150312T182913Z:07b3482d-6768-47b0-8cdc-a8abbc971d90',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:12 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': 'f91b91afae7a7e91a1e2c296f5b43280',
  date: 'Thu, 12 Mar 2015 18:29:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups?$filter=tagname%20eq%20%27xplatResourceGroupTag2294%27&api-version=2014-04-01-preview')
  .reply(200, "{\"value\":[]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '31979',
  'x-ms-request-id': 'e5c304c8-29a3-4f2c-a746-27bf8d503cd4',
  'x-ms-correlation-request-id': 'e5c304c8-29a3-4f2c-a746-27bf8d503cd4',
  'x-ms-routing-request-id': 'WESTUS:20150312T182914Z:e5c304c8-29a3-4f2c-a746-27bf8d503cd4',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:13 GMT',
  'content-length': '12' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The service name is unknown.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '193',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '7f41d716c80475fb9b01a493cd192627',
  date: 'Thu, 12 Mar 2015 18:29:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/resourcegroups/xplatResourceGroupTagGrp4656?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFR1JPVVBUQUdHUlA0NjU2LVNPVVRIQ0VOVFJBTFVTIiwiam9iTG9jYXRpb24iOiJzb3V0aGNlbnRyYWx1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1185',
  'x-ms-request-id': '7a1db6da-9005-4b78-afed-6ee22ffbe2d6',
  'x-ms-correlation-request-id': '7a1db6da-9005-4b78-afed-6ee22ffbe2d6',
  'x-ms-routing-request-id': 'WESTUS:20150312T182915Z:7a1db6da-9005-4b78-afed-6ee22ffbe2d6',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:15 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .put('/3ca49042-782a-4cc9-89b5-ee1b487fe115/services?service=sqlserver&action=register')
  .reply(503, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>TooManyRequests</Code><Message>Too many requests received. Retry after some time.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '214',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.202 (rd_rdfe_stable.150307-1902) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'x-ms-request-id': '41609b31a6f07279804b2d4abb89c2d8',
  date: 'Thu, 12 Mar 2015 18:29:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFR1JPVVBUQUdHUlA0NjU2LVNPVVRIQ0VOVFJBTFVTIiwiam9iTG9jYXRpb24iOiJzb3V0aGNlbnRyYWx1cyJ9?api-version=2014-04-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/3ca49042-782a-4cc9-89b5-ee1b487fe115/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YUExBVFJFU09VUkNFR1JPVVBUQUdHUlA0NjU2LVNPVVRIQ0VOVFJBTFVTIiwiam9iTG9jYXRpb24iOiJzb3V0aGNlbnRyYWx1cyJ9?api-version=2014-04-01-preview',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '31971',
  'x-ms-request-id': '445a418a-c0b3-4be3-ab5b-9280119e3b81',
  'x-ms-correlation-request-id': '445a418a-c0b3-4be3-ab5b-9280119e3b81',
  'x-ms-routing-request-id': 'WESTUS:20150312T182931Z:445a418a-c0b3-4be3-ab5b-9280119e3b81',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 12 Mar 2015 18:29:31 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xplatResourceGroupTagGrp4656','xplatResourceGroupTag2294'];};