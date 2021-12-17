//file to crate conection between database and other files who need this conection

const knex = require('knex')
const consfigutation = require('../../knexfile') //importing database configuration from knex.js file

//creating development conection
const conection = knex(consfigutation.development)

module.exports = conection