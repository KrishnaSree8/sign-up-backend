const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')


var corsOptions = {
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT, OPTIONS",
}
dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("database connected"))

app.use(express.json())
app.use(cors(corsOptions))
app.use('/app', routes)
app.listen(4000, () => console.log("server is running"))