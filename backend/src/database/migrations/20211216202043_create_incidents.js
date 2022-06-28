
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    // table.increments();
    table.increments('id').primary();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    table.string('status').notNullable();

    table.bigInteger('ong').notNullable();
    //gets the ong id from ongs table
    table.foreign('ong').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
