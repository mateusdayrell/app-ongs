//file to export methods

const generateUniqueId = require('../utils/generateUniqueId')
const cryptoService = require('../helpers/services/crypto');
const crypto = require('crypto');

//concets with database, necessary for operations with the database
const conection = require('../database/conection')
//const crypto = require('crypto') //node package for random names, numbers


//export methods
module.exports = {
    
    //listing
    async index(request,response) {
    
        const ongs = await conection('ongs').select('*')
    
        return response.json(ongs)
    },

    //creating
    async create (request, response) {
        const password = await cryptoService.hashPassword(request.body.password)
        const {name, email, document, field, phone, city, uf} = request.body //geting data from body

        const id = generateUniqueId() //creating a random number for id

        await conection('ongs').insert({
            hash: crypto.randomBytes(4).toString('HEX'),
            name,
            email,
            password,
            document,
            field,
            phone,
            city,
            uf,
        })
    
        return response.json({ id })
    }
}