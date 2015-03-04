#!/usr/bin/env node
var gitx = require("./index.js");

var opts = require("nomnom")
  .option('debug', {
    abbr: 'd',
    flag: true,
    help: 'Print debugging info'
  })
  .option('port', {
    abbr: 'p',
    metavar: 'INT',
    default: process.env.PORT || 80,
    help: 'Port number to host gitx server on'
  })
  .option('host', {
    abbr: 'h',
    metavar: 'ADDRESS',
    default: process.env.IP || "localhost",
    help: 'Host address to host gitx server on'
  })
  .option('version', {
    abbr: 'v',
    flag: true,
    help: 'print version and exit',
    callback: function ( ) {
       return "version " + gitx.VERSION;
    }
  })
  .parse();

var server = gitx(opts);
server.listen(opts.port, opts.host, function (){
  console.log('gitx server located@ http://%s:%s', opts.host, opts.port);
});
