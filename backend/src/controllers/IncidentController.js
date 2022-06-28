const conection = require('../database/conection')

module.exports = {

    async index(request,response) {
        const { page = 1 } = request.query //paginacao

        const [count] = await conection('incidents').count()//counting incidents
        console.log(count)
        
        const incidents = await conection('incidents')
            .join('ongs ', 'ong', '=', 'incidents.ong')
            .limit(5) //paginacao
            .offset((page - 1) * 5) //paginacao
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.city', 
                'ongs.uf'])


        response.header('X-Total-Count', count ['count(*)'])
    
        return response.json(incidents)
    },    
    
    async create(request,response) {
        const {title, description, value} = request.body
        const ong = request.headers.authorization
        const status = 'ativo'
        
        const id = await conection('incidents').insert({
            title, 
            description, 
            value,
            ong,
            status
        })

        return response.json({ id })
    },

    async delete(request, response){
        const { id } = request.params
        const ong = request.headers.authorization

        const incident = await conection('incidents')
            .where('id', id)
            .select('ong')
            .first()

        if(incident.ong !== ong){

            return response.status(401).json({ error: 'Operation not permited.'})
        }
    
        await conection('incidents').where('id', id).delete()

        return response.status(204).send()
    }

}