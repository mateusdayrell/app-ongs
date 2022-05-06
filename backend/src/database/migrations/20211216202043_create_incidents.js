
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    //table.string('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('status').notNullable();

    table.string('ong_id').notNullable();
    //gets the ong id from ongs table
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
    // return knex.schema.dropTable('ongs') //delete table
    return knex.schema.table('incidents', function (table) {
      table.dropForeign('ong_id');
      knex.schema.dropTable('incidents');
    });
};
