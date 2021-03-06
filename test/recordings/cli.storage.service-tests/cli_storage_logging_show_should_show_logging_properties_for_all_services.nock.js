// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'c9cbd920-c00c-427c-852b-8aaf38badaeb',
    name: 'Azure SDK Powershell Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: ['website'],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /><DefaultServiceVersion>2015-04-05</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1f72ee02-0001-0029-7ad2-bfe045000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>true</Write><Delete>false</Delete><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>true</IncludeAPIs><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /><DefaultServiceVersion>2015-04-05</DefaultServiceVersion></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '1f72ee02-0001-0029-7ad2-bfe045000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.table.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '541305da-0002-0046-07d2-bf4891000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.table.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>true</Read><Write>false</Write><Delete>true</Delete><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>true</Enabled><IncludeAPIs>false</IncludeAPIs><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '541305da-0002-0046-07d2-bf4891000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://xplat.queue.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b944e450-0003-004b-23d2-bfa79d000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.queue.core.windows.net:443')
  .get('/?comp=properties&restype=service')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><StorageServiceProperties><Logging><Version>1.0</Version><Read>false</Read><Write>true</Write><Delete>true</Delete><RetentionPolicy><Enabled>true</Enabled><Days>5</Days></RetentionPolicy></Logging><HourMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>false</Enabled></RetentionPolicy></HourMetrics><MinuteMetrics><Version>1.0</Version><Enabled>false</Enabled><RetentionPolicy><Enabled>true</Enabled><Days>10</Days></RetentionPolicy></MinuteMetrics><Cors /></StorageServiceProperties>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  server: 'Windows-Azure-Queue/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b944e450-0003-004b-23d2-bfa79d000000',
  'x-ms-version': '2015-04-05',
  date: 'Mon, 06 Jun 2016 09:03:28 GMT',
  connection: 'close' });
 return result; }]];