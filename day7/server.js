const express = require('express')
const env = require('dotenv')
const app = express()

env.config()

app.use(express.json())

//route
const getData = require('./routes/route')

app.use('/api', getData)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running at port ${process.env.PORT}`)
})