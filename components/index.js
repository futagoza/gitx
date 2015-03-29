module.exports = function ( app, options ) {
  
  require("./git")(app, options);
  require("./users")(app, options);
  require("./api")(app, options);
  require("./homepage")(app, options);
  
};
