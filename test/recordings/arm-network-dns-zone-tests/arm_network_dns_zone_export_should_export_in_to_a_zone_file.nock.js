// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"45e9e6e4-1407-4f13-8b5a-7f71d36af5c8\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":28}}", { 'cache-control': 'private',
  'content-length': '346',
  'content-type': 'application/json; charset=utf-8',
  etag: '45e9e6e4-1407-4f13-8b5a-7f71d36af5c8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '766286c7-6d7d-4870-a6f8-742408eb70f1',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'be9d373e-b29b-43a6-825a-d587c1bd6e44',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T080201Z:be9d373e-b29b-43a6-825a-d587c1bd6e44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 08:02:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/example1.com?api-version=2015-05-04-preview')
  .reply(200, "{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplatTestGCreateDns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\",\"name\":\"example1.com\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"45e9e6e4-1407-4f13-8b5a-7f71d36af5c8\",\"location\":\"global\",\"properties\":{\"maxNumberOfRecordSets\":1000,\"numberOfRecordSets\":28}}", { 'cache-control': 'private',
  'content-length': '346',
  'content-type': 'application/json; charset=utf-8',
  etag: '45e9e6e4-1407-4f13-8b5a-7f71d36af5c8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '766286c7-6d7d-4870-a6f8-742408eb70f1',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11996',
  'x-ms-correlation-request-id': 'be9d373e-b29b-43a6-825a-d587c1bd6e44',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T080201Z:be9d373e-b29b-43a6-825a-d587c1bd6e44',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 08:02:00 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"29da7af2-7251-4f77-b51b-241c11cab656\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.example1.com\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.example1.com.\",\"expireTime\":1814400,\"host\":\"ns1.example1.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"243197be-e12c-4bb3-9e0b-735dc95346cc\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"3a0135b7-e5fa-4a43-997a-ba94326b8e2e\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.example1.com\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/conflict-a\",\"name\":\"conflict-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"acca9847-46fa-4fea-a5ea-adabb2132eb8\",\"location\":\"global\",\"properties\":{\"fqdn\":\"conflict-a.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/conflict-ca\",\"name\":\"conflict-ca\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"e76b692d-ba1b-4dc5-b635-939a968b977b\",\"location\":\"global\",\"properties\":{\"fqdn\":\"conflict-ca.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"gottherefirst.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/conflict-cname\",\"name\":\"conflict-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"fcc041c0-2b24-4a51-b218-9072e30ece9a\",\"location\":\"global\",\"properties\":{\"fqdn\":\"conflict-cname.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test2.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"0612453b-c9c7-4d41-b1d9-e380200cdaab\",\"location\":\"global\",\"properties\":{\"fqdn\":\"default.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/record\",\"name\":\"record\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"20dd3547-11b2-4b48-abc2-ab1064be604c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"record.example1.com\",\"TTL\":5,\"CNAMERecord\":{\"cname\":\"bar.foo.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/subzone\",\"name\":\"subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"c19342b0-f40a-4e19-a8f2-d2ee39e92945\",\"location\":\"global\",\"properties\":{\"fqdn\":\"subzone.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"3.4.5.6\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname.subzone\",\"name\":\"test-cname.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"678d890a-f5c9-4094-afe2-57dc441a7510\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-cname.subzone.example1.com\",\"TTL\":5,\"CNAMERecord\":{\"cname\":\"r1.subzone.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www.subzone\",\"name\":\"www.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"9ae107a6-56e2-4dfd-8d93-8834d6c8a6c2\",\"location\":\"global\",\"properties\":{\"fqdn\":\"www.subzone.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"4.5.6.7\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"dc7242c1-090d-4815-8d1d-e4421399e0d2\",\"location\":\"global\",\"properties\":{\"fqdn\":\"tc.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test\",\"name\":\"test\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"8ff41d5d-bba5-44de-b6ec-4832b9a67293\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"7.8.9.0\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-a\",\"name\":\"test-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"6facc8ac-b479-4781-be52-6a3bfa964b9b\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-a.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-a2\",\"name\":\"test-a2\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"323081bf-6d19-4baa-b791-301df22621e4\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-a2.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"},{\"ipv4Address\":\"2.3.4.5\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/test-aaaa\",\"name\":\"test-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"f7f3fca0-88f7-4155-a408-2d7e17f7802c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-aaaa.example1.com\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/test-aaaa2\",\"name\":\"test-aaaa2\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"11cd71fb-aba0-4894-a33a-9779200b19c0\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-aaaa2.example1.com\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"},{\"ipv6Address\":\"2001:cafe:130::101\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname\",\"name\":\"test-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"84357702-639b-4a6b-9aeb-c327a655dfa5\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-cname.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"target.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname2\",\"name\":\"test-cname2\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"45cb126d-fe1f-41a5-ae90-6e36847169f8\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-cname2.example1.com\",\"TTL\":5,\"CNAMERecord\":{\"cname\":\"r1.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx\",\"name\":\"test-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"f229cf7e-00bd-4e5a-9160-bab5f3bc9605\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-mx.example1.com\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"bb9bfc9f-29c2-47dd-a80a-a7d11f45a12c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-mx2.example1.com\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.com.\",\"preference\":10},{\"exchange\":\"mail2.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv\",\"name\":\"test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"607b549f-ab7c-466c-8a2f-e691255468bc\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-srv.example1.com\",\"TTL\":5,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.example1.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/_sip._tcp.test-srv\",\"name\":\"_sip._tcp.test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"23fc561c-2013-4208-8ba0-1dd8289de1b4\",\"location\":\"global\",\"properties\":{\"fqdn\":\"_sip._tcp.test-srv.example1.com\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv2\",\"name\":\"test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"c8205f95-a26c-44a2-9d70-dfe1dbb8d6dd\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-srv2.example1.com\",\"TTL\":5,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/_sip._tcp.test-srv2\",\"name\":\"_sip._tcp.test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"e5fac3b9-8a04-47d1-a875-14df7346aa15\",\"location\":\"global\",\"properties\":{\"fqdn\":\"_sip._tcp.test-srv2.example1.com\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com.\",\"weight\":2},{\"port\":3,\"priority\":1,\"target\":\"target2.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/test-txt\",\"name\":\"test-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"d8f4ee20-0b59-4e75-b3ac-33e760cbbf3f\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-txt.example1.com\",\"TTL\":3600,\"TXTRecords\":[{\"value\":\"string 1\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/test-txt2\",\"name\":\"test-txt2\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"4f83533f-9b23-496c-8e9a-059ba6dcb330\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-txt2.example1.com\",\"TTL\":3600,\"TXTRecords\":[{\"value\":\"string 1\"},{\"value\":\"string 2\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www\",\"name\":\"www\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"b2e6c50d-e2ba-4146-a9cc-e7d36627a8ff\",\"location\":\"global\",\"properties\":{\"fqdn\":\"www.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"2.3.4.5\"}]}}]}", { 'cache-control': 'private',
  'content-length': '11564',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '418c84a4-1537-4c2e-8081-85b66be5d892',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '50bb055b-888b-4895-81be-d23740bd8521',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T080204Z:50bb055b-888b-4895-81be-d23740bd8521',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 08:02:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateDns/providers/Microsoft.Network/dnszones/example1.com/recordsets?api-version=2015-05-04-preview')
  .reply(200, "{\"value\":[{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SOA\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"29da7af2-7251-4f77-b51b-241c11cab656\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.example1.com\",\"TTL\":3600,\"SOARecord\":{\"email\":\"hostmaster.example1.com.\",\"expireTime\":1814400,\"host\":\"ns1.example1.com.\",\"minimumTTL\":10800,\"refreshTime\":43200,\"retryTime\":900}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"243197be-e12c-4bb3-9e0b-735dc95346cc\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/NS\\/@\",\"name\":\"@\",\"type\":\"Microsoft.Network\\/dnszones\",\"etag\":\"3a0135b7-e5fa-4a43-997a-ba94326b8e2e\",\"location\":\"global\",\"properties\":{\"fqdn\":\"@.example1.com\",\"TTL\":3600,\"NSRecords\":[{\"nsdname\":\"ns1-04.azure-dns.com.\"},{\"nsdname\":\"ns2-04.azure-dns.net.\"},{\"nsdname\":\"ns3-04.azure-dns.org.\"},{\"nsdname\":\"ns4-04.azure-dns.info.\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/conflict-a\",\"name\":\"conflict-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"acca9847-46fa-4fea-a5ea-adabb2132eb8\",\"location\":\"global\",\"properties\":{\"fqdn\":\"conflict-a.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/conflict-ca\",\"name\":\"conflict-ca\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"e76b692d-ba1b-4dc5-b635-939a968b977b\",\"location\":\"global\",\"properties\":{\"fqdn\":\"conflict-ca.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"gottherefirst.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/conflict-cname\",\"name\":\"conflict-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"fcc041c0-2b24-4a51-b218-9072e30ece9a\",\"location\":\"global\",\"properties\":{\"fqdn\":\"conflict-cname.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test2.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/default\",\"name\":\"default\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"0612453b-c9c7-4d41-b1d9-e380200cdaab\",\"location\":\"global\",\"properties\":{\"fqdn\":\"default.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"0.1.2.3\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/record\",\"name\":\"record\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"20dd3547-11b2-4b48-abc2-ab1064be604c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"record.example1.com\",\"TTL\":5,\"CNAMERecord\":{\"cname\":\"bar.foo.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/subzone\",\"name\":\"subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"c19342b0-f40a-4e19-a8f2-d2ee39e92945\",\"location\":\"global\",\"properties\":{\"fqdn\":\"subzone.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"3.4.5.6\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname.subzone\",\"name\":\"test-cname.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"678d890a-f5c9-4094-afe2-57dc441a7510\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-cname.subzone.example1.com\",\"TTL\":5,\"CNAMERecord\":{\"cname\":\"r1.subzone.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www.subzone\",\"name\":\"www.subzone\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"9ae107a6-56e2-4dfd-8d93-8834d6c8a6c2\",\"location\":\"global\",\"properties\":{\"fqdn\":\"www.subzone.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"4.5.6.7\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/tc\",\"name\":\"tc\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"dc7242c1-090d-4815-8d1d-e4421399e0d2\",\"location\":\"global\",\"properties\":{\"fqdn\":\"tc.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"test.example1.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test\",\"name\":\"test\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"8ff41d5d-bba5-44de-b6ec-4832b9a67293\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"7.8.9.0\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-a\",\"name\":\"test-a\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"6facc8ac-b479-4781-be52-6a3bfa964b9b\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-a.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/test-a2\",\"name\":\"test-a2\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"323081bf-6d19-4baa-b791-301df22621e4\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-a2.example1.com\",\"TTL\":3600,\"ARecords\":[{\"ipv4Address\":\"1.2.3.4\"},{\"ipv4Address\":\"2.3.4.5\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/test-aaaa\",\"name\":\"test-aaaa\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"f7f3fca0-88f7-4155-a408-2d7e17f7802c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-aaaa.example1.com\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/AAAA\\/test-aaaa2\",\"name\":\"test-aaaa2\",\"type\":\"Microsoft.Network\\/dnszones\\/AAAA\",\"etag\":\"11cd71fb-aba0-4894-a33a-9779200b19c0\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-aaaa2.example1.com\",\"TTL\":3600,\"AAAARecords\":[{\"ipv6Address\":\"2001:cafe:130::100\"},{\"ipv6Address\":\"2001:cafe:130::101\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname\",\"name\":\"test-cname\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"84357702-639b-4a6b-9aeb-c327a655dfa5\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-cname.example1.com\",\"TTL\":3600,\"CNAMERecord\":{\"cname\":\"target.com.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/CNAME\\/test-cname2\",\"name\":\"test-cname2\",\"type\":\"Microsoft.Network\\/dnszones\\/CNAME\",\"etag\":\"45cb126d-fe1f-41a5-ae90-6e36847169f8\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-cname2.example1.com\",\"TTL\":5,\"CNAMERecord\":{\"cname\":\"r1.\"}}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx\",\"name\":\"test-mx\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"f229cf7e-00bd-4e5a-9160-bab5f3bc9605\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-mx.example1.com\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/MX\\/test-mx2\",\"name\":\"test-mx2\",\"type\":\"Microsoft.Network\\/dnszones\\/MX\",\"etag\":\"bb9bfc9f-29c2-47dd-a80a-a7d11f45a12c\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-mx2.example1.com\",\"TTL\":3600,\"MXRecords\":[{\"exchange\":\"mail.com.\",\"preference\":10},{\"exchange\":\"mail2.com.\",\"preference\":10}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv\",\"name\":\"test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"607b549f-ab7c-466c-8a2f-e691255468bc\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-srv.example1.com\",\"TTL\":5,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.example1.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/_sip._tcp.test-srv\",\"name\":\"_sip._tcp.test-srv\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"23fc561c-2013-4208-8ba0-1dd8289de1b4\",\"location\":\"global\",\"properties\":{\"fqdn\":\"_sip._tcp.test-srv.example1.com\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/test-srv2\",\"name\":\"test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"c8205f95-a26c-44a2-9d70-dfe1dbb8d6dd\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-srv2.example1.com\",\"TTL\":5,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"srv1.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/SRV\\/_sip._tcp.test-srv2\",\"name\":\"_sip._tcp.test-srv2\",\"type\":\"Microsoft.Network\\/dnszones\\/SRV\",\"etag\":\"e5fac3b9-8a04-47d1-a875-14df7346aa15\",\"location\":\"global\",\"properties\":{\"fqdn\":\"_sip._tcp.test-srv2.example1.com\",\"TTL\":3600,\"SRVRecords\":[{\"port\":3,\"priority\":1,\"target\":\"target.com.\",\"weight\":2},{\"port\":3,\"priority\":1,\"target\":\"target2.com.\",\"weight\":2}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/test-txt\",\"name\":\"test-txt\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"d8f4ee20-0b59-4e75-b3ac-33e760cbbf3f\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-txt.example1.com\",\"TTL\":3600,\"TXTRecords\":[{\"value\":\"string 1\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/TXT\\/test-txt2\",\"name\":\"test-txt2\",\"type\":\"Microsoft.Network\\/dnszones\\/TXT\",\"etag\":\"4f83533f-9b23-496c-8e9a-059ba6dcb330\",\"location\":\"global\",\"properties\":{\"fqdn\":\"test-txt2.example1.com\",\"TTL\":3600,\"TXTRecords\":[{\"value\":\"string 1\"},{\"value\":\"string 2\"}]}},{\"id\":\"\\/subscriptions\\/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948\\/resourceGroups\\/xplattestgcreatedns\\/providers\\/Microsoft.Network\\/dnszones\\/example1.com\\/A\\/www\",\"name\":\"www\",\"type\":\"Microsoft.Network\\/dnszones\\/A\",\"etag\":\"b2e6c50d-e2ba-4146-a9cc-e7d36627a8ff\",\"location\":\"global\",\"properties\":{\"fqdn\":\"www.example1.com\",\"TTL\":5,\"ARecords\":[{\"ipv4Address\":\"2.3.4.5\"}]}}]}", { 'cache-control': 'private',
  'content-length': '11564',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '418c84a4-1537-4c2e-8081-85b66be5d892',
  server: 'Microsoft-IIS/7.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '50bb055b-888b-4895-81be-d23740bd8521',
  'x-ms-routing-request-id': 'CENTRALINDIA:20151105T080204Z:50bb055b-888b-4895-81be-d23740bd8521',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 05 Nov 2015 08:02:03 GMT',
  connection: 'close' });
 return result; }]];
