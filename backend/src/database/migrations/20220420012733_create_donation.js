
exports.up = function(knex) {
    return knex.schema.createTable('donation', function (table) {
        //table.increments();
        //table.string('id').primary();
        // table.string('payment_method').notNullable();
        // table.decimal('value').notNullable();
    
        // table.string('ong_id').notNullable();
        // table.string('incident_id').notNullable();
        // table.string('user_id').notNullable();
        // gets the ong id from ongs table
        // table.foreign('ong_id').references('id').inTable('ongs');
        // table.foreign('incident_id').references('id').inTable('incidents');
        // table.foreign('user_id').references('id').inTable('users');
      })
};

exports.down = function(knex) {
    return knex.schema.table('donation', function (table) {
        // table.dropForeign('ong_id');
        // table.dropForeign('incident_id');
        // table.dropForeign('user_id');
        // knex.schema.dropTable('donation');
      });
};
