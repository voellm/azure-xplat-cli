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
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2016-07-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fip1</Name><Type>Private</Type><StaticIPAddress>10.1.0.5</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort></FrontendPorts><Probes/><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2476',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c9f6d233cbf39f2d8b0b6db97f2e094f',
  date: 'Mon, 25 Apr 2016 09:47:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2016-07-01')
  .reply(200, "<ApplicationGatewayConfiguration xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><FrontendIPConfigurations><FrontendIPConfiguration><Name>fip1</Name><Type>Private</Type><StaticIPAddress>10.1.0.5</StaticIPAddress></FrontendIPConfiguration></FrontendIPConfigurations><FrontendPorts><FrontendPort><Name>fep1</Name><Port>80</Port></FrontendPort></FrontendPorts><Probes/><BackendAddressPools><BackendAddressPool><Name>pool1</Name><IPAddresses><IPAddress>10.0.0.1</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>MyPool</Name><IPAddresses><IPAddress>10.0.0.2</IPAddress></IPAddresses></BackendAddressPool><BackendAddressPool><Name>clitestaddpool</Name><IPAddresses><IPAddress>10.0.0.10</IPAddress></IPAddresses></BackendAddressPool></BackendAddressPools><BackendHttpSettingsList><BackendHttpSettings><Name>setting1</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>MySettings</Name><Port>81</Port><Protocol>Http</Protocol><CookieBasedAffinity>Enabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>settings2</Name><Port>888</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>settings3</Name><Port>999</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings><BackendHttpSettings><Name>httpSetting</Name><Port>80</Port><Protocol>Http</Protocol><CookieBasedAffinity>Disabled</CookieBasedAffinity><RequestTimeout>30</RequestTimeout><AuthenticationCertificates i:nil=\"true\"/></BackendHttpSettings></BackendHttpSettingsList><HttpListeners><HttpListener><Name>listener1</Name><FrontendPort>fep1</FrontendPort><Protocol>Http</Protocol></HttpListener></HttpListeners><HttpLoadBalancingRules><HttpLoadBalancingRule><Name>rule1</Name><Type>Basic</Type><BackendHttpSettings>setting1</BackendHttpSettings><Listener>listener1</Listener><BackendAddressPool>pool1</BackendAddressPool></HttpLoadBalancingRule></HttpLoadBalancingRules></ApplicationGatewayConfiguration>", { 'cache-control': 'no-cache',
  'content-length': '2476',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c9f6d233cbf39f2d8b0b6db97f2e094f',
  date: 'Mon, 25 Apr 2016 09:47:04 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2016-07-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d57870d2-be63-4016-a3dc-9776ef3a7966</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '794b03b498b1a8d2aa620e5dd0f93561',
  date: 'Mon, 25 Apr 2016 09:47:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/ApplicationGateways/CliTestAppGate/configuration?api-version=2016-07-01', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>d57870d2-be63-4016-a3dc-9776ef3a7966</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '794b03b498b1a8d2aa620e5dd0f93561',
  date: 'Mon, 25 Apr 2016 09:47:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d57870d2-be63-4016-a3dc-9776ef3a7966')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d57870d2-be63-4016-a3dc-9776ef3a7966</ID><OperationCompletedTime>2016-04-25T09:47:09.6838668</OperationCompletedTime><OperationStartedTime>2016-04-25T09:47:06.6078274</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd43228bd1b10a3d9944cf08090b50f64',
  date: 'Mon, 25 Apr 2016 09:47:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/services/networking/operation/d57870d2-be63-4016-a3dc-9776ef3a7966')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>d57870d2-be63-4016-a3dc-9776ef3a7966</ID><OperationCompletedTime>2016-04-25T09:47:09.6838668</OperationCompletedTime><OperationStartedTime>2016-04-25T09:47:06.6078274</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '416',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd43228bd1b10a3d9944cf08090b50f64',
  date: 'Mon, 25 Apr 2016 09:47:38 GMT',
  connection: 'close' });
 return result; }]];
