
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.increments('id').primary();
        table.string('name').notNullabe;
        table.string('email').notNullabe;
        table.string('password').notNullabe;
        table.string('document', 14).notNullabe;
        table.string('field').notNullabe;
        table.string('phone').notNullabe;
        table.string('city').notNullabe;
        table.string('uf', 2).notNullabe;
        table.string('hash').notNull().defaultTo('DEFA');
        table.timestamps();
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs') //delete table
};
