const bookshelf = require("../bookshelf");

class Priority extends bookshelf.Model {
  get tableName() {
    return "priorities";
  }

  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Priority", Priority);
