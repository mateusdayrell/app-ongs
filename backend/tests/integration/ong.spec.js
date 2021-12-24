const request =  require('supertest')
const app = require('../../src/app')
const conection = require('../../src/database/conection')

describe('ONG', () => {
    beforeEach( async() => {
        await conection.migrate.rollback()
        await conection.migrate.latest()
    })    

    afterAll( async() => {
        await conection.destroy()
    })
    
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: 'Ong',
            email: 'contato@email.com',
            phone: '3898478945',
            city: 'Moc',
            uf: 'MG'
        })
    })    
})