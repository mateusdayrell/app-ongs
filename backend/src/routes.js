const express = require('express')
const routes = express.Router() 
const crypto = require('crypto') //node package for random names, numbers
const conection = require('./database/conection') //concets with database, necessary for operations with the database

//importing controllers(functions)
const OngControlller = require('./controllers/OngController')
const IncidentControlller = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//routes to see and create ong registers
routes.get('/ongs', OngControlller.index)
routes.post('/ongs', OngControlller.create)

routes.get('/profile', ProfileController.index)

routes.post('/sessions', SessionController.create)

//routes to see, create and delete incidents
routes.get('/incidents', IncidentControlller.index)
routes.post('/incidents', IncidentControlller.create)
routes.delete('/incidents/:id', IncidentControlller.delete)

//export var to other files
module.exports = routes