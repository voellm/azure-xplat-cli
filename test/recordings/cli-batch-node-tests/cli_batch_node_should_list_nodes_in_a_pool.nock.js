// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46241355-bb95-46a9-ba6c-42b554d71925',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Microsoft Azure Internal Consumption',
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
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3850571994_1-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:29:44.6060647Z\",\"lastBootTime\":\"2016-09-08T18:29:42.3920502Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.172.87\",\"affinityId\":\"TVM:tvm-3850571994_1-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":6,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-09-08T18:29:44.4090618Z\",\"endTime\":\"2016-09-08T18:29:44.6060647Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_2-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_2-20160908t182327z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:27:17.2014649Z\",\"lastBootTime\":\"2016-09-08T18:27:14.8054608Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.220.50\",\"affinityId\":\"TVM:tvm-3850571994_2-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-09-08T18:27:17.011462Z\",\"endTime\":\"2016-09-08T18:27:17.2014649Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_3-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_3-20160908t182327z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:30:16.6522661Z\",\"lastBootTime\":\"2016-09-08T18:30:15.0450767Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.210.80\",\"affinityId\":\"TVM:tvm-3850571994_3-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":4,\"totalTasksSucceeded\":1,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-09-12T23:35:29.0623355Z\",\"endTime\":\"2016-09-12T23:35:29.21846Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-09-08T18:30:16.5272648Z\",\"endTime\":\"2016-09-08T18:30:16.6522661Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd6e2ac2d-93fd-4ae9-b2c7-896ff7f6f286',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '65ea02fe-9214-4bdd-9b14-fb7bae7ae324',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-3850571994_1-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_1-20160908t182327z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:29:44.6060647Z\",\"lastBootTime\":\"2016-09-08T18:29:42.3920502Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.172.87\",\"affinityId\":\"TVM:tvm-3850571994_1-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":6,\"totalTasksSucceeded\":2,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-09-08T18:29:44.4090618Z\",\"endTime\":\"2016-09-08T18:29:44.6060647Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_2-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_2-20160908t182327z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:27:17.2014649Z\",\"lastBootTime\":\"2016-09-08T18:27:14.8054608Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.220.50\",\"affinityId\":\"TVM:tvm-3850571994_2-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":3,\"totalTasksSucceeded\":0,\"runningTasksCount\":0,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-09-08T18:27:17.011462Z\",\"endTime\":\"2016-09-08T18:27:17.2014649Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    },{\r\n      \"id\":\"tvm-3850571994_3-20160908t182327z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool/nodes/tvm-3850571994_3-20160908t182327z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:30:16.6522661Z\",\"lastBootTime\":\"2016-09-08T18:30:15.0450767Z\",\"allocationTime\":\"2016-09-08T18:23:27.9145685Z\",\"ipAddress\":\"100.72.210.80\",\"affinityId\":\"TVM:tvm-3850571994_3-20160908t182327z\",\"vmSize\":\"small\",\"totalTasksRun\":4,\"totalTasksSucceeded\":1,\"runningTasksCount\":0,\"recentTasks\":[\r\n        {\r\n          \"taskUrl\":\"https://jstesteastus2.eastus2.batch.azure.com/jobs/xplatJobForFileTests/tasks/xplattask\",\"jobId\":\"xplatJobForFileTests\",\"taskId\":\"xplattask\",\"subtaskId\":0,\"taskState\":\"completed\",\"executionInfo\":{\r\n            \"startTime\":\"2016-09-12T23:35:29.0623355Z\",\"endTime\":\"2016-09-12T23:35:29.21846Z\",\"exitCode\":0,\"retryCount\":0,\"requeueCount\":0\r\n          }\r\n        }\r\n      ],\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"startTaskInfo\":{\r\n        \"state\":\"completed\",\"startTime\":\"2016-09-08T18:30:16.5272648Z\",\"endTime\":\"2016-09-08T18:30:16.6522661Z\",\"exitCode\":0,\"retryCount\":0\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd6e2ac2d-93fd-4ae9-b2c7-896ff7f6f286',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '65ea02fe-9214-4bdd-9b14-fb7bae7ae324',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1695681911_1-20160908t182355z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:27:01.16022Z\",\"lastBootTime\":\"2016-09-08T18:27:00.597363Z\",\"allocationTime\":\"2016-09-08T18:23:55.125708Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-1695681911_1-20160908t182355z\",\"vmSize\":\"standard_a1\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b5a1c17e-3eed-4d3d-822e-206a581aa153',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '71fb7a4b-97d3-4dce-8546-19fa294e7685',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:40 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools/xplatTestLinuxPool/nodes?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#nodes\",\"value\":[\r\n    {\r\n      \"id\":\"tvm-1695681911_1-20160908t182355z\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool/nodes/tvm-1695681911_1-20160908t182355z\",\"state\":\"idle\",\"schedulingState\":\"enabled\",\"stateTransitionTime\":\"2016-09-08T18:27:01.16022Z\",\"lastBootTime\":\"2016-09-08T18:27:00.597363Z\",\"allocationTime\":\"2016-09-08T18:23:55.125708Z\",\"ipAddress\":\"10.0.0.4\",\"affinityId\":\"TVM:tvm-1695681911_1-20160908t182355z\",\"vmSize\":\"standard_a1\",\"totalTasksRun\":0,\"totalTasksSucceeded\":0,\"runningTasksCount\":0\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b5a1c17e-3eed-4d3d-822e-206a581aa153',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '71fb7a4b-97d3-4dce-8546-19fa294e7685',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:40 GMT',
  connection: 'close' });
 return result; }]];