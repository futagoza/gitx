// required modules
var express = require("express");

// api tasks
var tasks = [
  "git-status",
  "git-clone",
  "git-fetch",
  "git-commit",
  "git-push",
  "git-pull",
  "git-checkout",
  "git-merge",
  "gitx-status",
  "gitx-get-users",
  "gitx-add-user",
  "gitx-remove-user",
  "gitx-get-repos",
  "gitx-add-repo",
  "gitx-remove-repo"
];

// setup api and create rest-api
module.exports = function ( app, options ) {
  var api = express();
  
  tasks.forEach(function(task){
    require("./" + task)(api, app, options);
  });
  
  app.route('/api', api);
};
