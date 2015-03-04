// required modules
var express = require("express");
var favicon = require("serve-favicon");
var join = require("path").join;
var __toString = Object.prototype.toString;

// static content paths
var PUBLIC_DIR = join(__dirname, 'public');
var INDEX_FILE = join(PUBLIC_DIR, 'index.html');
var FAVICON = join(PUBLIC_DIR, 'favicon.ico');

// serves the index file
function serveIndex ( req, res ) { res.sendFile(INDEX_FILE); }

// express gitx middleware
function middleware ( options ) {
  if ( __toString.call(options) !== '[object Object]' ) {
    options = {};
  }
  var app = express();
  
  app.use(favicon(FAVICON));
  app.use('/', express.static(PUBLIC_DIR));

  app.get('/', serveIndex);
  app.get('/index.html', serveIndex);

  require("./components/homepage")(app, options);
  require("./components/explorer")(app, options);
  require("./components/repository")(app, options);
  require("./components/settings")(app, options);
  require("./components/help")(app, options);

  return app;
}

// export middleware
module.exports = middleware;
