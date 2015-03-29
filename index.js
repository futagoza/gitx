// required modules
var express = require("express");
var favicon = require("serve-favicon");
var join = require("path").join;
var __toString = Object.prototype.toString;

// static content paths
var PUBLIC_DIR = join(__dirname, 'public');
var FAVICON = join(PUBLIC_DIR, 'favicon.ico');

// express gitx middleware
module.exports = function ( options ) {
  options = options || {};
  var app = express();
  
  app.use(favicon(FAVICON));
  app.use('/', express.static(PUBLIC_DIR));

  require("./components")(app, options);

  return app;
};

// export version
module.exports.VERSION = require("./package.json").version;
