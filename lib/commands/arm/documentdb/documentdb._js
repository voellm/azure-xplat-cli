/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var util = require('util');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var documentdbUtils = require('./documentdbUtil');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var log = cli.output;
    
  var documentdb = cli.category('documentdb')
    .description($('Commands to manage DocumentDB'));

    var databaseAccountCommands = documentdb.category('account')
    .description($('Commands to manage your database accounts'));
    
    databaseAccountCommands.command('create [name]')
    .description($('Create a DocumentDB account'))
    .option('-n, --name <name>', $('the name of the new documentdb account'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (name, options, _ ) {
        console.log('Not yet implemented (' + name + ',' + options + ')');
    });
    
    databaseAccountCommands.command('delete [name]')
    .description($('Delete a DocumentDB account'))
    .option('-n, --name <name>', $('the name of the documentdb account to delete'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (name, options, _) {
        console.log('Not yet implemented (' + name + ',' + options + ')');
    });
    
    databaseAccountCommands.command('list')
    .description($('List your DocumentDB accounts'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (options, _ ) {
        console.log('Not yet implemented (' + options + ')');
    });
    
    var databaseCommands = documentdb.category('database')
    .description($('Commands to manage your databases'));
    
    databaseCommands.command('create [account] [name]')
    .description($('Create a database'))
    .option('-a, --account <account>', $('the name of the database account for the database'))
    .option('-n, --name <name>', $('the name of the new database'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, name, options, _) {
        console.log('Not yet implemented (' + account + ','+ name + ',' + options + ')');
    });
    
    databaseCommands.command('delete [account] [name]')
    .description($('Delete a database'))
    .option('-a, --account <account>', $('the name of the account for the database'))
    .option('-n, --name <name>', $('the name of the database to delete'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, name, options, _) {
        console.log('Not yet implemented (' + account + ',' + name + ',' + options + ')');
    });
    
    databaseCommands.command('list [account]')
    .description($('List your databases'))
    .option('-a, --account <account>', $('the name of the account for the database'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, options, _) {
        console.log('Not yet implemented (' + account + ',' + options + ')');
    });
    
    var collectionCommands = documentdb.category('collection')
    .description($('Commands to manage your database collections'));
    
    collectionCommands.command('create [account] [database] [name]')
    .description($('Create a collection'))
    .option('-a, --account <account>', $('the name of the database account for the database'))
    .option('-d, --database <database>', $('the name of the database'))
    .option('-n, --name <name>', $('the name of the new database'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, database, name, options, _) {
        console.log('Not yet implemented (' + account + ',' + database + ',' + name + ',' + options + ')');
    });
    
    collectionCommands.command('delete [account] [database] [name]')
    .description($('Delete a collection'))
    .option('-a, --account <account>', $('the name of the account for the database'))
    .option('-d, --database <database>', $('the name of the database'))
    .option('-n, --name <name>', $('the name of the collection to delete'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, database, name, options, _) {
        console.log('Not yet implemented (' + account + ',' + database + ',' + name + ',' + options + ')');
    });
    
    collectionCommands.command('list [account] [database]')
    .description($('List your collections'))
    .option('-a, --account <account>', $('the name of the account for the database'))
    .option('-d, --database <database>', $('the name of the database'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, database, options, _) {
        console.log('Not yet implemented (' + account + ',' + database + options + ')');
    });

    var documentCommands = documentdb.category('document')
    .description($('Commands to manage your documents'));
    
    documentCommands.command('insert [account] [database] [collection] [id] [filename]')
    .description($('Create a collection'))
    .option('-a, --account <account>', $('the name of the database account for the database'))
    .option('-d, --database <database>', $('the name of the database'))
    .option('-c, --collection <collection>', $('the name of the collection'))
    .option('-i, --id <id>', $('the id of the new document'))
    .option('-f, --filename <filename>', $('the filename of the new document contents'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, database, collection, id, filename, options, _) {
        console.log('Not yet implemented (' + account + ',' + database + ',' + collection + ',' + id + ',' + filename + ',' + options + ')');
    });
    
    documentCommands.command('delete [account] [database] [collection] [id]')
    .description($('Delete a collection'))
    .option('-a, --account <account>', $('the name of the account for the database'))
    .option('-d, --database <database>', $('the name of the database'))
    .option('-c, --collection <collection>', $('the name of the collection'))
    .option('-i, --id <id>', $('the id of the document to delete'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, database, collection, id, options, _) {
        console.log('Not yet implemented (' + account + ',' + database + ',' + collection + ',' + id + ',' + options + ')');
    });
        
    documentCommands.command('list [account] [database] [collection]')
    .description($('List your documents'))
    .option('-a, --account <account>', $('the name of the account for the database'))
    .option('-d, --database <database>', $('the name of the database'))
    .option('-c, --collection <collection>', $('the name of the collection'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function (account, database, collection, options, _) {
        console.log('Not yet implemented (' + options + ')');
    });
    
};


function displayASample(row, documentdb) {
  row.cell($('Name'), documentdb.properties.documentdbName);
  var documentdbDetails = documentdbUtils.getdocumentdbDetails(documentdb);
  row.cell($('Properties'), documentdbDetails.properties);
}
