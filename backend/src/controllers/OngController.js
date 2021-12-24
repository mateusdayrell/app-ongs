//file to export methods

const generateUniqueId = require('../utils/generateUniqueId')

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
        const {name, email, phone, city, uf} = request.body //geting data from body

        const id = generateUniqueId() //creating a random number for id

        await conection('ongs').insert({
            id,
            name,
            email,
            phone,
            city,
            uf
        })
    
        return response.json({ id })
    }
}