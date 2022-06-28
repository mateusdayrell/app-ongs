exports.up = async function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('name').notNullabe;
        table.string('email').notNullabe;
        table.string('password').notNullabe;
        table.string('document', 11).notNullabe;
        table.string('phone').notNullabe;
        table.timestamps();
    });
};

exports.down = async function(knex) {
    return knex.schema.dropTable('users') //delete table
};
