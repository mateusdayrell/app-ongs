const conection = require('../database/conection')

module.exports = {

    async index(request,response) {
        const incidents = await conection('incidents').select('*')
    
        return response.json(incidents)
    },    
    
    async create(request,response) {
        const {title, description, value} = request.body
        const ong_id = request.headers.authorization

        const [id] = await conection('incidents').insert({
            title, 
            description, 
            value,
            ong_id
        })

        return response.json({ id })
    }
}