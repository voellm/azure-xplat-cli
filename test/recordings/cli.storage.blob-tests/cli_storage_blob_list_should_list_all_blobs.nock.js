// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'DefaultEndpointsProtocol=https;AccountName=xplat;AccountKey=null';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test?restype=container&comp=list&include=snapshots%2Cmetadata%2Ccopy')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.blob.core.windows.net/\" ContainerName=\"storage-cli-blob-test\"><Blobs><Blob><Name>appendblobname8860</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:47 GMT</Last-Modified><Etag>0x8D3C27C6ECB5B1D</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>AppendBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname5169</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:39 GMT</Last-Modified><Etag>0x8D3C27C698B2391</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname51693763</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:52 GMT</Last-Modified><Etag>0x8D3C27C716548EE</Etag><Content-Length>17</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>rG1yD4pD69MsOEPPGr72YA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>locked</LeaseStatus><LeaseState>leased</LeaseState><LeaseDuration>infinite</LeaseDuration></Properties><Metadata /></Blob><Blob><Name>blockblobname516937639389</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:55 GMT</Last-Modified><Etag>0x8D3C27C737BFB05</Etag><Content-Length>10</Content-Length><Content-Type>text/xml</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>pageblobname9978</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:42 GMT</Last-Modified><Etag>0x8D3C27C6B4A65B4</Etag><Content-Length>512</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>pageblobname99783758</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:45 GMT</Last-Modified><Etag>0x8D3C27C6D0EFF31</Etag><Content-Length>512</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob></Blobs><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f39090a9-0001-000f-4e65-f47bf1000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplat.blob.core.windows.net:443')
  .get('/storage-cli-blob-test?restype=container&comp=list&include=snapshots%2Cmetadata%2Ccopy')
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://xplat.blob.core.windows.net/\" ContainerName=\"storage-cli-blob-test\"><Blobs><Blob><Name>appendblobname8860</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:47 GMT</Last-Modified><Etag>0x8D3C27C6ECB5B1D</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>AppendBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname5169</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:39 GMT</Last-Modified><Etag>0x8D3C27C698B2391</Etag><Content-Length>10</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>blockblobname51693763</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:52 GMT</Last-Modified><Etag>0x8D3C27C716548EE</Etag><Content-Length>17</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>rG1yD4pD69MsOEPPGr72YA==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>locked</LeaseStatus><LeaseState>leased</LeaseState><LeaseDuration>infinite</LeaseDuration></Properties><Metadata /></Blob><Blob><Name>blockblobname516937639389</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:55 GMT</Last-Modified><Etag>0x8D3C27C737BFB05</Etag><Content-Length>10</Content-Length><Content-Type>text/xml</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>aOEJ8PQMpyoV4FzCJ4b45g==</Content-MD5><Cache-Control /><Content-Disposition /><BlobType>BlockBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>pageblobname9978</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:42 GMT</Last-Modified><Etag>0x8D3C27C6B4A65B4</Etag><Content-Length>512</Content-Length><Content-Type>text/plain</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob><Blob><Name>pageblobname99783758</Name><Properties><Last-Modified>Fri, 12 Aug 2016 06:46:45 GMT</Last-Modified><Etag>0x8D3C27C6D0EFF31</Etag><Content-Length>512</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5>OToPoPNI+wOHGrk3JgV93A==</Content-MD5><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState></Properties><Metadata /></Blob></Blobs><NextMarker /></EnumerationResults>", { 'transfer-encoding': 'chunked',
  'content-type': 'application/xml',
  vary: 'Origin',
  server: 'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'f39090a9-0001-000f-4e65-f47bf1000000',
  'x-ms-version': '2015-04-05',
  date: 'Fri, 12 Aug 2016 06:46:56 GMT',
  connection: 'close' });
 return result; }]];