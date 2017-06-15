const pg = require('pg');
var postgresUrl = 'postgres://localhost/twitterdb';
var client = new pg.Client(postgresUrl);

// connecting to the `postgres` server
client.connect(function(){
  console.log('database listening');
});

// make the client available as a Node module
module.exports = client;
