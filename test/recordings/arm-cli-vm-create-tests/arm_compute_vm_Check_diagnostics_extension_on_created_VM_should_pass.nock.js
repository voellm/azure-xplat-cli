// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'cffbd00f-9edf-41f9-8f74-4a6ec260dcb8',
    name: 'VM Depot Main Subscription',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"446b6563-8ffe-406f-8046-6c8cd62ffe1e\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL1684\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D2\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5562ececc1aefbd3-os-1467126955749\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13862.blob.core.windows.net/xplatteststoragecnt13319/cli5562ececc1aefbd3-os-1467126955749.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage13862.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.OSTCExtensions\",\r\n        \"type\": \"LinuxDiagnostic\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":null,\"ladCfg\":{\"diagnosticMonitorConfiguration\":{\"metrics\":{\"resourceId\":\"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm\",\"metricAggregation\":[{\"scheduledTransferPeriod\":\"PT1H\"},{\"scheduledTransferPeriod\":\"PT1M\"}]},\"performanceCounters\":{\"performanceCounterConfiguration\":[{\"class\":\"Memory\",\"counterSpecifier\":\"PercentAvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"AvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"UsedMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"PercentUsedSwap\",\"table\":\"LinuxMemory\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentProcessorTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIOWaitTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIdleTime\",\"table\":\"LinuxCpu\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageWriteTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageReadTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"ReadBytesPerSecond\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"WriteBytesPerSecond\",\"table\":\"LinuxDisk\"}]}}},\"storageAccount\":\"xplatteststorage13862\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n      \"name\": \"LinuxDiagnostic\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5452',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e51ed969-f33c-4da7-b3ce-5a3cf70407e8_131097754838062447',
  'x-ms-request-id': 'f2f9f3dd-7e7a-4352-b22e-052f67f5f04b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': 'c58b06ba-76e2-408e-962f-63a3124933c1',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160628T152834Z:c58b06ba-76e2-408e-962f-63a3124933c1',
  date: 'Tue, 28 Jun 2016 15:28:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm?api-version=2016-03-30')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"446b6563-8ffe-406f-8046-6c8cd62ffe1e\",\r\n    \"availabilitySet\": {\r\n      \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/availabilitySets/XPLATTESTAAVAIL1684\"\r\n    },\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_D2\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"15.10\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"cli5562ececc1aefbd3-os-1467126955749\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatteststorage13862.blob.core.windows.net/xplatteststoragecnt13319/cli5562ececc1aefbd3-os-1467126955749.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIID/zCCAuegAwIBAgIJAMUAa+XVLvAeMA0GCSqGSIb3DQEBBQUAMIGVMQswCQYD\\r\\nVQQGEwJJbjESMBAGA1UECAwJS2FybmF0YWthMRIwEAYDVQQHDAlCYW5nYWxvcmUx\\r\\nEDAOBgNVBAoMB2JyaWxsaW8xEjAQBgNVBAsMCW1pY3Jvc29mdDEQMA4GA1UEAwwH\\r\\nYnJpbGxpbzEmMCQGCSqGSIb3DQEJARYXc3JlZWthbnRoYnNAeWFob28uY28uaW4w\\r\\nHhcNMTUwMzA1MTE1MzEyWhcNMTYwMzA0MTE1MzEyWjCBlTELMAkGA1UEBhMCSW4x\\r\\nEjAQBgNVBAgMCUthcm5hdGFrYTESMBAGA1UEBwwJQmFuZ2Fsb3JlMRAwDgYDVQQK\\r\\nDAdicmlsbGlvMRIwEAYDVQQLDAltaWNyb3NvZnQxEDAOBgNVBAMMB2JyaWxsaW8x\\r\\nJjAkBgkqhkiG9w0BCQEWF3NyZWVrYW50aGJzQHlhaG9vLmNvLmluMIIBIjANBgkq\\r\\nhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyUNKaOuT0NK+S8Ck81zy9xJ6hXfZvAC6\\r\\nlhbmf/6s/WVimJ/TX5NMhQJwC9k6ZIF92KfYrojHNvHDufSZ3EtKUVwRFCDjmgMT\\r\\nDL09WkGaZt7gROYFK0iZ4KrYGovUwlwum9fHB24OJiOV4bi0ek62/rHx9fjYZpvp\\r\\naIH2PV/hN8SCZ0x7HJMberD4gVoU/Kv42nNvwjLUW6IZfVx/Gv5OeFDtWHfSvUEF\\r\\ndadHKTPn3Ab20Iu6gZIbLO9Vuf38/IpaYGfnFCouHdzmiTiLieYNe3CUPcOJNSv7\\r\\n1G8KYpx3uNJRkJPab5OsRyJw75Gvzkr9OgaPss9tVD6Gt68u3WQtVQIDAQABo1Aw\\r\\nTjAdBgNVHQ4EFgQUogvhXB+xZ2JJPfLO6cVs4ForzscwHwYDVR0jBBgwFoAUogvh\\r\\nXB+xZ2JJPfLO6cVs4ForzscwDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOC\\r\\nAQEAdDj7qUNJ45xlF5cjd+4x5NHvAD1VTjOKu+Xh/uzSSjXqB2F0aOMWA9lx0qaQ\\r\\noJgHkGxj3zz/W7ik/cVGL2O+vRIOKv/y0OPogEmS3Hw+P+O6OGE7x1G6YN0zLVoL\\r\\nu4BN/BEYmjttxM9I7qqL7C5cJoE+K3s/w1/pt/68ohJcr7F9Ohi7cso62xuGY1Rm\\r\\nksAh2EUDsU9JV/P+C9AMpLSrb03JJYzVj4w1RHbrmw2AjFyGXdQYkggyXisg+Ifr\\r\\n5gbNN7HigpHf7b2i3CQBUqp9m23frh5AhnLI2qp3UXgc52U5ieLdi/t6j0TTZqqY\\r\\nHhHqofKrj938HHlBNpC5/LVh3w==\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Network/networkInterfaces/xplattestnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatteststorage13862.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"resources\": [\r\n    {\r\n      \"properties\": {\r\n        \"publisher\": \"Microsoft.OSTCExtensions\",\r\n        \"type\": \"LinuxDiagnostic\",\r\n        \"typeHandlerVersion\": \"2.3\",\r\n        \"autoUpgradeMinorVersion\": true,\r\n        \"settings\": {\"xmlCfg\":null,\"ladCfg\":{\"diagnosticMonitorConfiguration\":{\"metrics\":{\"resourceId\":\"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm\",\"metricAggregation\":[{\"scheduledTransferPeriod\":\"PT1H\"},{\"scheduledTransferPeriod\":\"PT1M\"}]},\"performanceCounters\":{\"performanceCounterConfiguration\":[{\"class\":\"Memory\",\"counterSpecifier\":\"PercentAvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"AvailableMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"UsedMemory\",\"table\":\"LinuxMemory\"},{\"class\":\"Memory\",\"counterSpecifier\":\"PercentUsedSwap\",\"table\":\"LinuxMemory\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentProcessorTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIOWaitTime\",\"table\":\"LinuxCpu\"},{\"class\":\"Processor\",\"counterSpecifier\":\"PercentIdleTime\",\"table\":\"LinuxCpu\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageWriteTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"AverageReadTime\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"ReadBytesPerSecond\",\"table\":\"LinuxDisk\"},{\"class\":\"PhysicalDisk\",\"counterSpecifier\":\"WriteBytesPerSecond\",\"table\":\"LinuxDisk\"}]}}},\"storageAccount\":\"xplatteststorage13862\"},\r\n        \"provisioningState\": \"Succeeded\"\r\n      },\r\n      \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm/extensions/LinuxDiagnostic\",\r\n      \"name\": \"LinuxDiagnostic\",\r\n      \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n      \"location\": \"southeastasia\"\r\n    }\r\n  ],\r\n  \"id\": \"/subscriptions/cffbd00f-9edf-41f9-8f74-4a6ec260dcb8/resourceGroups/xplatTestGVMCreate3852/providers/Microsoft.Compute/virtualMachines/xplatvm\",\r\n  \"name\": \"xplatvm\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"southeastasia\",\r\n  \"tags\": {\r\n    \"a\": \"b\",\r\n    \"b\": \"c\",\r\n    \"d\": \"\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '5452',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e51ed969-f33c-4da7-b3ce-5a3cf70407e8_131097754838062447',
  'x-ms-request-id': 'f2f9f3dd-7e7a-4352-b22e-052f67f5f04b',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': 'c58b06ba-76e2-408e-962f-63a3124933c1',
  'x-ms-routing-request-id': 'SOUTHINDIA:20160628T152834Z:c58b06ba-76e2-408e-962f-63a3124933c1',
  date: 'Tue, 28 Jun 2016 15:28:33 GMT',
  connection: 'close' });
 return result; }]];