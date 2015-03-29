// required modules
var join = require("path").join;

// static content paths
var INDEX_FILE = join(__dirname, 'index.html');

// serves the index file
function serveIndex ( req, res ) { res.sendFile(INDEX_FILE); }

// setup default pages
module.exports = function ( app, options ) {
  
  app.get('/', serveIndex);
  app.get('/index.html', serveIndex);
  
};
