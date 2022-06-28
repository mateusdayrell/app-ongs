const conection = require('../database/conection')

module.exports = {
    async index(request, response){
        const ong = request.headers.authorization
    
    const incidents = await conection('incidents')
    .where('ong', ong)
    .select('*')

    return response.json(incidents)
    }

}