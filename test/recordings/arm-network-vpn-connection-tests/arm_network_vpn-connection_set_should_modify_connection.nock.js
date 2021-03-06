// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"36293b64-b2a1-464f-8657-3cfbc111f471\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"70eee185-5310-4b9d-9de3-ede96180a30c\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 22,\r\n    \"sharedKey\": \"abc123\",\r\n    \"enableBgp\": false,\r\n    \"connectionStatus\": \"Unknown\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1171',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f5ddb192-ac4e-4198-ac62-f2021abc5c24',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14970',
  'x-ms-correlation-request-id': 'fdf98a96-c51a-4cf8-914e-f73a6bfb18c8',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T114941Z:fdf98a96-c51a-4cf8-914e-f73a6bfb18c8',
  date: 'Tue, 16 Aug 2016 11:49:40 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2016-09-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"bf32dc3d-0e2d-47e8-9a82-d8e01ab121c4\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"70eee185-5310-4b9d-9de3-ede96180a30c\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"3082019006092A864886F70D010703A08201813082017D0201003182014930820145020100302D3019311730150603550403130E6E72702D656E6372797074696F6E02105A63B005AC7543964887A6D28260FDF4300D06092A864886F70D0101010500048201009620DA06EA0D134B8B2AAFD11AE55AB6E2280CCA42F105F0EAC9CCE9C79F7C6D2DE243041C46C8F40F38FB9D6C87C2EB62BAC17926456FD07283EAE90409C51C84783283F5CEF3E637F1EC8CF2FF6CA14F01B6A2DE5A6EDD89D1B94EA490DAF0B1BF3364492000B537198087D2D858A38138FBD4F6D57FFBAFC18DBDF87401A84C9113EE4708CCE4DECE7E5A309B530B248DB29F2C0D7905F95D5A101ACB59306D5BDEDE6D2788DC0B4134A4782CE40036FE1246D1EC14208148144E72E496F25DE19E7F933C9B010CE31846AB74AE7C6375B0CE8A59C66C092DC0EEC4EDDD0FE54E5E8E8B6F06158E72EE02F88B9476B5A2D8B190541B39A2674594EA23FF08302B06092A864886F70D010701301406082A864886F70D03070408F8F6FFA72336B1608008A02101ACDBC0B50F\",\r\n    \"enableBgp\": false,\r\n    \"connectionStatus\": \"Unknown\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1992',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '6da12b77-3249-44c8-8c53-4761e5a35882',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6da12b77-3249-44c8-8c53-4761e5a35882?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'f1f667ca-9790-4997-866a-f9a984ea555f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T114943Z:f1f667ca-9790-4997-866a-f9a984ea555f',
  date: 'Tue, 16 Aug 2016 11:49:42 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/eastus/operations/6da12b77-3249-44c8-8c53-4761e5a35882?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2b2217a1-32c6-4a00-9ce6-165fd198dead',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14982',
  'x-ms-correlation-request-id': 'facfbb43-e262-45bc-bb75-8aefc353e18f',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T115014Z:facfbb43-e262-45bc-bb75-8aefc353e18f',
  date: 'Tue, 16 Aug 2016 11:50:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-connection\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/connections/test-vpn-connection\",\r\n  \"etag\": \"W/\\\"d926a689-8e57-49fd-99c5-e67b00971081\\\"\",\r\n  \"type\": \"Microsoft.Network/connections\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"70eee185-5310-4b9d-9de3-ede96180a30c\",\r\n    \"virtualNetworkGateway1\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-1\"\r\n    },\r\n    \"virtualNetworkGateway2\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-gateway-group-2/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway-2\"\r\n    },\r\n    \"connectionType\": \"Vnet2Vnet\",\r\n    \"routingWeight\": 33,\r\n    \"sharedKey\": \"abc123\",\r\n    \"enableBgp\": false,\r\n    \"connectionStatus\": \"Unknown\",\r\n    \"ingressBytesTransferred\": 0,\r\n    \"egressBytesTransferred\": 0\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '26de214f-67cd-456c-a812-c570158b4134',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14979',
  'x-ms-correlation-request-id': '30b2f290-a82c-4189-8419-c945c466cf71',
  'x-ms-routing-request-id': 'WESTEUROPE:20160816T115015Z:30b2f290-a82c-4189-8419-c945c466cf71',
  date: 'Tue, 16 Aug 2016 11:50:15 GMT' });
 return result; }]];
