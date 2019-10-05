const bookshelf = require("../bookshelf");

class Card extends bookshelf.Model {
  get tableName() {
    return "cards";
  }

  users() {
    return this.belongsTo("User");
  }

  priorities() {
    return this.belongsTo("Priority");
  }

  statuses() {
    return this.belongsTo("Status");
  }

  get hasTimestamps() {
    return false;
  }
}

module.exports = bookshelf.model("Card", Card);
