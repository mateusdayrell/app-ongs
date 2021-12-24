//file to crate conection between database and other files who need this conection

const knex = require('knex')
const configuration = require('../../knexfile') //importing database configuration from knex.js file

//setting ambient var
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

//creating development conection
const conection = knex(config)

module.exports = conection