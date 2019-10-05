const bookshelf = require("../bookshelf");

class Status extends bookshelf.Model {
  get tableName() {
    return "statuses";
  }

  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Status", Status);
