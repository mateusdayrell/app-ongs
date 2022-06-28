const express = require('express')
const routes = express.Router() 
const crypto = require('crypto') //node package for random names, numbers
const conection = require('./database/conection') //concets with database, necessary for operations with the database

//validation
const { celebrate, Segments, Joi } = require('celebrate')

//importing controllers(functions)
const OngControlller = require('./controllers/OngController')
const IncidentControlller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//routes to see and create ong registers
routes.get('/ongs', OngControlller.index)
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required(),
        document: Joi.string().required().length(14),
        field: Joi.string().required(),
        phone: Joi.string().required().min(10).max(11),
        city: Joi.string().required(), 
        uf: Joi.string().required().length(2)
    })
}), OngControlller.create)

//routes to see, create and delete incidents
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentControlller.index)

routes.post('/incidents', IncidentControlller.create)
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentControlller.delete)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    }), ProfileController.index)

routes.post('/sessions', SessionController.create)

//export var to other files
module.exports = routes