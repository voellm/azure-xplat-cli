// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'b67f7fec-69fc-4974-9099-a26bd6ffeda3',
    name: 'Monitoring vNext Test Environment Services 02',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() { };

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth\",\"name\":\"Default1-Default-Web-BrazilSouth\",\"type\":\"Microsoft.Insights/autoscaleSettings\",\"location\":\"East US\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\",\"hidden-link:/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\":\"Resource\"},\"properties\":{\"profiles\":[{\"name\":\"No scheduled times\",\"capacity\":{\"minimum\":\"1\",\"maximum\":\"4\",\"default\":\"1\"},\"rules\":[{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricNamespace\":\"\",\"metricResourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT45M\",\"timeAggregation\":\"Average\",\"operator\":\"GreaterThanOrEqual\",\"threshold\":80.0},\"scaleAction\":{\"direction\":\"Increase\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT5M\"}},{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricNamespace\":\"\",\"metricResourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT45M\",\"timeAggregation\":\"Average\",\"operator\":\"LessThanOrEqual\",\"threshold\":60.0},\"scaleAction\":{\"direction\":\"Decrease\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT2H\"}}]}],\"enabled\":true,\"name\":\"Default1-Default-Web-BrazilSouth\",\"targetResourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1840',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c3a882a3-d532-49c9-93d5-59942da9da47',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31917',
  'x-ms-correlation-request-id': '65d0a4de-4565-42fa-ae66-9e31f4ea9625',
  'x-ms-routing-request-id': 'WESTUS:20150416T213036Z:65d0a4de-4565-42fa-ae66-9e31f4ea9625',
  date: 'Thu, 16 Apr 2015 21:30:35 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourcegroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth?api-version=2014-04-01')
  .reply(200, "{\"id\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.insights/autoscalesettings/Default1-Default-Web-BrazilSouth\",\"name\":\"Default1-Default-Web-BrazilSouth\",\"type\":\"Microsoft.Insights/autoscaleSettings\",\"location\":\"East US\",\"tags\":{\"$type\":\"Microsoft.WindowsAzure.Management.Common.Storage.CasePreservedDictionary, Microsoft.WindowsAzure.Management.Common.Storage\",\"hidden-link:/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\":\"Resource\"},\"properties\":{\"profiles\":[{\"name\":\"No scheduled times\",\"capacity\":{\"minimum\":\"1\",\"maximum\":\"4\",\"default\":\"1\"},\"rules\":[{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricNamespace\":\"\",\"metricResourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT45M\",\"timeAggregation\":\"Average\",\"operator\":\"GreaterThanOrEqual\",\"threshold\":80.0},\"scaleAction\":{\"direction\":\"Increase\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT5M\"}},{\"metricTrigger\":{\"metricName\":\"CpuPercentage\",\"metricNamespace\":\"\",\"metricResourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-brazilsouth/providers/microsoft.web/serverFarms/Default1\",\"timeGrain\":\"PT1M\",\"statistic\":\"Average\",\"timeWindow\":\"PT45M\",\"timeAggregation\":\"Average\",\"operator\":\"LessThanOrEqual\",\"threshold\":60.0},\"scaleAction\":{\"direction\":\"Decrease\",\"type\":\"ChangeCount\",\"value\":\"1\",\"cooldown\":\"PT2H\"}}]}],\"enabled\":true,\"name\":\"Default1-Default-Web-BrazilSouth\",\"targetResourceUri\":\"/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Default-Web-BrazilSouth/providers/microsoft.web/serverFarms/Default1\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1840',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c3a882a3-d532-49c9-93d5-59942da9da47',
  server: 'Microsoft-IIS/8.5',
  'x-ms-ratelimit-remaining-subscription-reads': '31917',
  'x-ms-correlation-request-id': '65d0a4de-4565-42fa-ae66-9e31f4ea9625',
  'x-ms-routing-request-id': 'WESTUS:20150416T213036Z:65d0a4de-4565-42fa-ae66-9e31f4ea9625',
  date: 'Thu, 16 Apr 2015 21:30:35 GMT',
  connection: 'close' });
 return result; }]];