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
    registeredProviders: ['mobileservice'],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName?api-version=2016-09-01')
  .reply(200, "{\r\n  \"name\": \"virtualNetworkPeeringsName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName\",\r\n  \"etag\": \"W/\\\"35b258a8-6f46-48dc-b87f-bcaf9b0999f8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"peeringState\": \"Initiated\",\r\n    \"remoteVirtualNetwork\": {\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/remoteNetworkName\"\r\n    },\r\n    \"allowVirtualNetworkAccess\": true,\r\n    \"allowForwardedTraffic\": true,\r\n    \"allowGatewayTransit\": true,\r\n    \"useRemoteGateways\": false,\r\n    \"remoteAddressSpace\": {\r\n      \"addressPrefixes\": [\r\n        \"11.0.0.0/8\"\r\n      ]\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '884',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"35b258a8-6f46-48dc-b87f-bcaf9b0999f8"',
  'x-ms-request-id': '2a83c85b-a7bf-4b97-952a-e2da83456808',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14890',
  'x-ms-correlation-request-id': '262f8722-3b1e-4bc6-adc5-5df88fa7668e',
  'x-ms-routing-request-id': 'WESTEUROPE:20160820T072631Z:262f8722-3b1e-4bc6-adc5-5df88fa7668e',
  date: 'Sat, 20 Aug 2016 07:26:31 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName?api-version=2016-09-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operationResults/27ba2027-5f6f-4a30-a064-a04dde1115bb?api-version=2016-09-01',
  'retry-after': '10',
  'x-ms-request-id': '27ba2027-5f6f-4a30-a064-a04dde1115bb',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/27ba2027-5f6f-4a30-a064-a04dde1115bb?api-version=2016-09-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '76151f0b-a26a-4160-800e-6ddbb76a7ace',
  'x-ms-routing-request-id': 'WESTEUROPE:20160820T072632Z:76151f0b-a26a-4160-800e-6ddbb76a7ace',
  date: 'Sat, 20 Aug 2016 07:26:32 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/27ba2027-5f6f-4a30-a064-a04dde1115bb?api-version=2016-09-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6898a6c6-8e5f-460b-9082-1a3ed18887ac',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14888',
  'x-ms-correlation-request-id': '7a7c8100-fa52-413c-8554-e8e522f8c558',
  'x-ms-routing-request-id': 'WESTEUROPE:20160820T072703Z:7a7c8100-fa52-413c-8554-e8e522f8c558',
  date: 'Sat, 20 Aug 2016 07:27:03 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName?api-version=2016-09-01')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"Resource /subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-virtual-network-peerings/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/virtualNetworkPeerings/virtualNetworkPeeringsName not found.\",\r\n    \"details\": []\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '322',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b301bda4-eb51-4f9f-9dfa-6af1ebc8b065',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '14e4baf0-2c18-431c-9ca2-2e6877769929',
  'x-ms-routing-request-id': 'WESTEUROPE:20160820T072704Z:14e4baf0-2c18-431c-9ca2-2e6877769929',
  date: 'Sat, 20 Aug 2016 07:27:03 GMT' });
 return result; }]];
