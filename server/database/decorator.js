const Card = require("./models/Card");
const User = require("./models/User");
const Priority = require("./models/Priority");
const Status = require("./models/Status");

module.exports = function(req, res, next) {
  req.database = {
    Card,
    User,
    Priority,
    Status
  };
  next();
};
