//importing the express module and var form other files
const express = require("express")
const routes = require("./routes")
const cors =  require('cors')

//creating aplication
const app = express()

app.use(cors())
//turn the body of the aplication request in .json
app.use(express.json())
app.use(routes)


app.listen(3333)