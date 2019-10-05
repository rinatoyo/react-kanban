exports.up = function(knex) {
  return knex.schema.createTable("cards", table => {
    table.increments();
    table.string("title", 255).notNullable();
    table.string("body", 1024).notNullable();
    table
      .integer("priority_id")
      .references("id")
      .inTable("priorities")
      .notNullable();
    table
      .integer("status_id")
      .references("id")
      .inTable("statuses")
      .notNullable();
    table
      .integer("created_by")
      .references("id")
      .inTable("users")
      .notNullable();
    table
      .integer("assigned_to")
      .references("id")
      .inTable("users")
      .notNullable();

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cards");
};
