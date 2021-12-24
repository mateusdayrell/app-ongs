//importing the express module and var form other files
const express = require("express")
const routes = require("./routes")
const cors =  require('cors')
const { errors } = require ('celebrate')

//creating aplication
const app = express()

app.use(cors())
//turn the body of the aplication request in .json
app.use(express.json())
app.use(routes)
app.use(errors())

//exporting routes to server.js
module.exports = app