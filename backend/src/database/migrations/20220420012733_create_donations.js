
exports.up = function(knex) {
    return knex.schema.createTable('donations', function (table) {
        table.string('id').primary();
        table.string('payment_method').notNullable();
        table.decimal('value').notNullable(); 
        table.date('date').notNullable();  
       
        table.bigInteger('incident').notNullable();
        table.bigInteger('user').notNullable();
        
        table.foreign('incident').references('id').inTable('incidents');
        table.foreign('user').references('id').inTable('users');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('donations');
};
