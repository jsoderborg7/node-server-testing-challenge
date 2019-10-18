
exports.up = function(knex) {
  return knex.schema.createTable("friends", tbl =>{
    tbl.increments();
    tbl
      .string("name", 150)
      .notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("friends")
};