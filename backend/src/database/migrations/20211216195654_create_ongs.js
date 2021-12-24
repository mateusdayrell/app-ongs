
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullabe;
        table.string('email').notNullabe;
        table.string('phone').notNullabe;
        table.string('city').notNullabe;
        table.string('uf', 2).notNullabe;
        table.timestamps();
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs') //delete table
};
