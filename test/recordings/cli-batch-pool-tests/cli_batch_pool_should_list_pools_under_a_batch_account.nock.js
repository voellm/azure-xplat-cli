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
  .get('/pools?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"centos\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/centos\",\"eTag\":\"0x8D3D73D3962593E\",\"lastModified\":\"2016-09-07T16:37:14.5095486Z\",\"creationTime\":\"2016-09-07T16:37:14.5095486Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-07T16:37:14.5095486Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-07T16:39:24.8878439Z\",\"vmSize\":\"standard_a2\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.centos 7\"\r\n      }\r\n    },{\r\n      \"id\":\"test\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/test\",\"eTag\":\"0x8D3C6E65A994D0F\",\"lastModified\":\"2016-08-17T21:35:05.4145807Z\",\"creationTime\":\"2016-08-17T21:35:05.4145807Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-17T21:35:05.4145807Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-17T21:37:11.0214203Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"/bin/bash -c 'add-apt-repository http://dl.openfoam.org/ubuntu && echo \\\"deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main\\\" | sudo tee -a /etc/apt/sources.list && curl http://dl.openfoam.org/gpg.key | apt-key add - && curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && apt-get update && apt-get install -y openfoam4 && apt-get install -y google-chrome-stable'\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":true,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.0-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 14.04\"\r\n      }\r\n    },{\r\n      \"id\":\"ubuntuPool3\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/ubuntuPool3\",\"eTag\":\"0x8D3C1455B2E4B47\",\"lastModified\":\"2016-08-10T17:40:01.6036679Z\",\"creationTime\":\"2016-08-10T17:40:01.6036679Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-10T17:40:01.6036679Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-10T17:41:42.4432025Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":1,\"targetDedicated\":1,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"/bin/bash apt_get_install.sh\",\"resourceFiles\":[\r\n          {\r\n            \"blobSource\":\"https://jsxplat.blob.core.windows.net/jaschnei/apt_get_install.sh?sv=2014-02-14&sr=c&sig=1cmJ1qK%2BhU33TJ8S9PJGjzaweYDswAxW1IPB5aDg%2FjQ%3D&st=2016-08-09T07%3A00%3A00Z&se=2017-08-17T07%3A00%3A00Z&sp=r\",\"filePath\":\"apt_get_install.sh\"\r\n          }\r\n        ],\"runElevated\":true,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.0-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 14.04\"\r\n      }\r\n    },{\r\n      \"id\":\"windowsPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/windowsPool\",\"eTag\":\"0x8D3C081ABA48E7D\",\"lastModified\":\"2016-08-09T18:19:15.2374397Z\",\"creationTime\":\"2016-08-09T18:19:15.2374397Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-09T18:19:15.2374397Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-09T18:20:30.4901308Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":1,\"targetDedicated\":1,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"powershell.exe chocoInstall.ps1\",\"resourceFiles\":[\r\n          {\r\n            \"blobSource\":\"https://jsxplat.blob.core.windows.net/jaschnei/chocoInstall.ps1?sv=2014-02-14&sr=c&sig=1cmJ1qK%2BhU33TJ8S9PJGjzaweYDswAxW1IPB5aDg%2FjQ%3D&st=2016-08-09T07%3A00%3A00Z&se=2017-08-17T07%3A00%3A00Z&sp=r\",\"filePath\":\"chocoInstall.ps1\"\r\n          }\r\n        ],\"runElevated\":true,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatCreatedPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3DB6589333A98\",\"lastModified\":\"2016-09-12T23:35:52.9387672Z\",\"creationTime\":\"2016-09-12T23:35:52.9387672Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:35:52.9387672Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-12T23:35:53.0740954Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatTestLinuxPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool\",\"eTag\":\"0x8D3D81519745AA9\",\"lastModified\":\"2016-09-08T18:22:32.2340521Z\",\"creationTime\":\"2016-09-08T18:22:32.2340521Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-08T18:22:32.2340521Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-08T18:23:58.0590169Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":1,\"targetDedicated\":1,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.4-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 14.04\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatTestPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3D815151FFD36\",\"lastModified\":\"2016-09-08T18:22:24.970271Z\",\"creationTime\":\"2016-09-08T18:22:24.970271Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-08T18:22:24.970271Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-08T18:23:30.4836209Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'dd77510f-319b-4d53-8965-3b0ccd4c5ed0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6d870c61-41f7-4329-8d46-5d8ecf9654a5',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:54 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .get('/pools?api-version=2016-07-01.3.1&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#pools\",\"value\":[\r\n    {\r\n      \"id\":\"centos\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/centos\",\"eTag\":\"0x8D3D73D3962593E\",\"lastModified\":\"2016-09-07T16:37:14.5095486Z\",\"creationTime\":\"2016-09-07T16:37:14.5095486Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-07T16:37:14.5095486Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-07T16:39:24.8878439Z\",\"vmSize\":\"standard_a2\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"OpenLogic\",\"offer\":\"CentOS-HPC\",\"sku\":\"7.1\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.centos 7\"\r\n      }\r\n    },{\r\n      \"id\":\"test\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/test\",\"eTag\":\"0x8D3C6E65A994D0F\",\"lastModified\":\"2016-08-17T21:35:05.4145807Z\",\"creationTime\":\"2016-08-17T21:35:05.4145807Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-17T21:35:05.4145807Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-17T21:37:11.0214203Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"/bin/bash -c 'add-apt-repository http://dl.openfoam.org/ubuntu && echo \\\"deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main\\\" | sudo tee -a /etc/apt/sources.list && curl http://dl.openfoam.org/gpg.key | apt-key add - && curl https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && apt-get update && apt-get install -y openfoam4 && apt-get install -y google-chrome-stable'\",\"resourceFiles\":[\r\n          \r\n        ],\"runElevated\":true,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.0-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 14.04\"\r\n      }\r\n    },{\r\n      \"id\":\"ubuntuPool3\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/ubuntuPool3\",\"eTag\":\"0x8D3C1455B2E4B47\",\"lastModified\":\"2016-08-10T17:40:01.6036679Z\",\"creationTime\":\"2016-08-10T17:40:01.6036679Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-10T17:40:01.6036679Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-10T17:41:42.4432025Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":1,\"targetDedicated\":1,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"/bin/bash apt_get_install.sh\",\"resourceFiles\":[\r\n          {\r\n            \"blobSource\":\"https://jsxplat.blob.core.windows.net/jaschnei/apt_get_install.sh?sv=2014-02-14&sr=c&sig=1cmJ1qK%2BhU33TJ8S9PJGjzaweYDswAxW1IPB5aDg%2FjQ%3D&st=2016-08-09T07%3A00%3A00Z&se=2017-08-17T07%3A00%3A00Z&sp=r\",\"filePath\":\"apt_get_install.sh\"\r\n          }\r\n        ],\"runElevated\":true,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.0-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 14.04\"\r\n      }\r\n    },{\r\n      \"id\":\"windowsPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/windowsPool\",\"eTag\":\"0x8D3C081ABA48E7D\",\"lastModified\":\"2016-08-09T18:19:15.2374397Z\",\"creationTime\":\"2016-08-09T18:19:15.2374397Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-08-09T18:19:15.2374397Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-08-09T18:20:30.4901308Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":1,\"targetDedicated\":1,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"powershell.exe chocoInstall.ps1\",\"resourceFiles\":[\r\n          {\r\n            \"blobSource\":\"https://jsxplat.blob.core.windows.net/jaschnei/chocoInstall.ps1?sv=2014-02-14&sr=c&sig=1cmJ1qK%2BhU33TJ8S9PJGjzaweYDswAxW1IPB5aDg%2FjQ%3D&st=2016-08-09T07%3A00%3A00Z&se=2017-08-17T07%3A00%3A00Z&sp=r\",\"filePath\":\"chocoInstall.ps1\"\r\n          }\r\n        ],\"runElevated\":true,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatCreatedPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D3DB6589333A98\",\"lastModified\":\"2016-09-12T23:35:52.9387672Z\",\"creationTime\":\"2016-09-12T23:35:52.9387672Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-12T23:35:52.9387672Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-12T23:35:53.0740954Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatTestLinuxPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestLinuxPool\",\"eTag\":\"0x8D3D81519745AA9\",\"lastModified\":\"2016-09-08T18:22:32.2340521Z\",\"creationTime\":\"2016-09-08T18:22:32.2340521Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-08T18:22:32.2340521Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-08T18:23:58.0590169Z\",\"vmSize\":\"standard_a1\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":1,\"targetDedicated\":1,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"virtualMachineConfiguration\":{\r\n        \"imageReference\":{\r\n          \"publisher\":\"Canonical\",\"offer\":\"UbuntuServer\",\"sku\":\"14.04.4-LTS\",\"version\":\"latest\"\r\n        },\"nodeAgentSKUId\":\"batch.node.ubuntu 14.04\"\r\n      }\r\n    },{\r\n      \"id\":\"xplatTestPool\",\"url\":\"https://jstesteastus2.eastus2.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3D815151FFD36\",\"lastModified\":\"2016-09-08T18:22:24.970271Z\",\"creationTime\":\"2016-09-08T18:22:24.970271Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-09-08T18:22:24.970271Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-09-08T18:23:30.4836209Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n        \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n      },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n        \"nodeFillType\":\"Spread\"\r\n      },\"cloudServiceConfiguration\":{\r\n        \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n      }\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'dd77510f-319b-4d53-8965-3b0ccd4c5ed0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6d870c61-41f7-4329-8d46-5d8ecf9654a5',
  dataserviceversion: '3.0',
  date: 'Mon, 12 Sep 2016 23:35:54 GMT',
  connection: 'close' });
 return result; }]];