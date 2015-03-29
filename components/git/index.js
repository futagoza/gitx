// git tasks that this implementation targets to use
var tasks = [
  "status",
  "clone",
  "fetch",
  "commit",
  "push",
  "pull",
  "checkout",
  "merge"
];

// setup git
module.exports = function ( app, options ) {
  var git = app.git = {};
  
  tasks.forEach(function(task){
    git[task] = require("./" + task)(git, app, options);
  });
};
