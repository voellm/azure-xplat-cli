// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '38b598fc-e57a-423f-b2e7-dc0ddb631f1f',
    name: 'Visual Studio Ultimate with MSDN',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8579?api-version=2016-02-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceGroupNotFound\",\"message\":\"Resource group 'xDeploymentTestGroup8579' could not be found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-request-id': '487f14b2-3a7d-4ed6-81a2-3542029166a1',
  'x-ms-correlation-request-id': '487f14b2-3a7d-4ed6-81a2-3542029166a1',
  'x-ms-routing-request-id': 'WESTUS:20160318T002844Z:487f14b2-3a7d-4ed6-81a2-3542029166a1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:28:43 GMT',
  'content-length': '116' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8579?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579\",\"name\":\"xDeploymentTestGroup8579\",\"location\":\"westus\",\"tags\":{},\"properties\":{\"provisioningState\":\"Succeeded\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '211',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': 'f1991016-7035-4da8-8895-acf1891b97e9',
  'x-ms-correlation-request-id': 'f1991016-7035-4da8-8895-acf1891b97e9',
  'x-ms-routing-request-id': 'WESTUS:20160318T002845Z:f1991016-7035-4da8-8895-acf1891b97e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:28:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8579/providers/Microsoft.Resources/deployments/Deploy13817?api-version=2016-02-01', '*')
  .reply(201, "{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Resources/deployments/Deploy13817\",\"name\":\"Deploy13817\",\"properties\":{\"templateLink\":{\"uri\":\"http://azuresdkcitest.blob.core.windows.net/azure-cli-test/arm-deployment-template.json\",\"contentVersion\":\"1.0.0.0\"},\"parameters\":{\"siteName\":{\"type\":\"String\",\"value\":\"xDeploymentTestSite19965\"},\"hostingPlanName\":{\"type\":\"String\",\"value\":\"xDeploymentTestHost23482\"},\"siteLocation\":{\"type\":\"String\",\"value\":\"West US\"},\"sku\":{\"type\":\"String\",\"value\":\"Standard\"},\"workerSize\":{\"type\":\"String\",\"value\":\"0\"}},\"mode\":\"Incremental\",\"provisioningState\":\"Accepted\",\"timestamp\":\"2016-03-18T00:28:48.0513177Z\",\"duration\":\"PT1.1017834S\",\"correlationId\":\"61ab9dad-56cb-4eae-8a38-4b8cf401578e\",\"providers\":[{\"namespace\":\"Microsoft.Web\",\"resourceTypes\":[{\"resourceType\":\"serverfarms\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites\",\"locations\":[\"westus\"]},{\"resourceType\":\"sites/Extensions\",\"locations\":[null]}]},{\"namespace\":\"microsoft.insights\",\"resourceTypes\":[{\"resourceType\":\"autoscalesettings\",\"locations\":[\"eastus\"]},{\"resourceType\":\"alertrules\",\"locations\":[\"eastus\"]},{\"resourceType\":\"components\",\"locations\":[\"centralus\"]}]}],\"dependencies\":[{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/serverfarms/xDeploymentTestHost23482\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost23482\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/sites/xDeploymentTestSite19965\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite19965\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/Sites/xDeploymentTestSite19965\",\"resourceType\":\"Microsoft.Web/Sites\",\"resourceName\":\"xDeploymentTestSite19965\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/sites/xDeploymentTestSite19965/Extensions/MSDeploy\",\"resourceType\":\"Microsoft.Web/sites/Extensions\",\"resourceName\":\"xDeploymentTestSite19965/MSDeploy\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/serverfarms/xDeploymentTestHost23482\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost23482\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/microsoft.insights/autoscalesettings/xDeploymentTestHost23482-xDeploymentTestGroup8579\",\"resourceType\":\"microsoft.insights/autoscalesettings\",\"resourceName\":\"xDeploymentTestHost23482-xDeploymentTestGroup8579\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/sites/xDeploymentTestSite19965\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite19965\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/microsoft.insights/alertrules/ServerErrors xDeploymentTestSite19965\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ServerErrors xDeploymentTestSite19965\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/sites/xDeploymentTestSite19965\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite19965\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/microsoft.insights/alertrules/ForbiddenRequests xDeploymentTestSite19965\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"ForbiddenRequests xDeploymentTestSite19965\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/serverfarms/xDeploymentTestHost23482\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost23482\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/microsoft.insights/alertrules/CPUHigh xDeploymentTestHost23482\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"CPUHigh xDeploymentTestHost23482\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/serverfarms/xDeploymentTestHost23482\",\"resourceType\":\"Microsoft.Web/serverfarms\",\"resourceName\":\"xDeploymentTestHost23482\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/microsoft.insights/alertrules/LongHttpQueue xDeploymentTestHost23482\",\"resourceType\":\"microsoft.insights/alertrules\",\"resourceName\":\"LongHttpQueue xDeploymentTestHost23482\"},{\"dependsOn\":[{\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/Microsoft.Web/sites/xDeploymentTestSite19965\",\"resourceType\":\"Microsoft.Web/sites\",\"resourceName\":\"xDeploymentTestSite19965\"}],\"id\":\"/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourceGroups/xDeploymentTestGroup8579/providers/microsoft.insights/components/xDeploymentTestSite19965\",\"resourceType\":\"microsoft.insights/components\",\"resourceName\":\"xDeploymentTestSite19965\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8579/providers/Microsoft.Resources/deployments/Deploy13817/operationStatuses/08587433459585282134?api-version=2016-02-01',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-request-id': '61ab9dad-56cb-4eae-8a38-4b8cf401578e',
  'x-ms-correlation-request-id': '61ab9dad-56cb-4eae-8a38-4b8cf401578e',
  'x-ms-routing-request-id': 'WESTUS:20160318T002848Z:61ab9dad-56cb-4eae-8a38-4b8cf401578e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:28:47 GMT',
  'content-length': '5501' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8579/providers/Microsoft.Resources/deployments/Deploy13817/cancel?api-version=2016-02-01')
  .reply(204, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-request-id': '5f8667fa-2243-4614-a8b1-0061d8839fb7',
  'x-ms-correlation-request-id': '5f8667fa-2243-4614-a8b1-0061d8839fb7',
  'x-ms-routing-request-id': 'WESTUS:20160318T002848Z:5f8667fa-2243-4614-a8b1-0061d8839fb7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:28:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/resourcegroups/xDeploymentTestGroup8579?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDg1NzktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  'x-ms-request-id': 'd320e73d-5e2b-4ee1-be5e-10cff28e0ed9',
  'x-ms-correlation-request-id': 'd320e73d-5e2b-4ee1-be5e-10cff28e0ed9',
  'x-ms-routing-request-id': 'WESTUS:20160318T002848Z:d320e73d-5e2b-4ee1-be5e-10cff28e0ed9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:28:48 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDg1NzktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDg1NzktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01',
  'retry-after': '15',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '7f646719-b613-4e30-839d-e17ee8d8db4c',
  'x-ms-correlation-request-id': '7f646719-b613-4e30-839d-e17ee8d8db4c',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160318T002919Z:7f646719-b613-4e30-839d-e17ee8d8db4c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:29:19 GMT',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/38b598fc-e57a-423f-b2e7-dc0ddb631f1f/operationresults/eyJqb2JJZCI6IlJFU09VUkNFR1JPVVBERUxFVElPTkpPQi1YREVQTE9ZTUVOVFRFU1RHUk9VUDg1NzktV0VTVFVTIiwiam9iTG9jYXRpb24iOiJ3ZXN0dXMifQ?api-version=2016-02-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-request-id': '4d1c7f47-4b72-4c72-bc20-461126a9b6e5',
  'x-ms-correlation-request-id': '4d1c7f47-4b72-4c72-bc20-461126a9b6e5',
  'x-ms-routing-request-id': 'NORTHCENTRALUS:20160318T002950Z:4d1c7f47-4b72-4c72-bc20-461126a9b6e5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 18 Mar 2016 00:29:50 GMT',
  'content-length': '0' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xDeploymentTestSite19965','xDeploymentTestHost23482','xDeploymentTestGroup8579','Deploy13817'];};