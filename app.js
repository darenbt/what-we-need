// initial variables
const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const togetRoutes = require('./routes/toget')

// location for .env path
require('dotenv').config({path: './config/.env'})

// function for connection to DB
connectDB()

// middleware
app.set('view engine', 'ejs') //won't need view engine for react
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// paths for routers
app.use('/', homeRoutes)
app.use('/toget/api', togetRoutes)

// starts the server
app.listen(process.env.PORT, ()=>{
  console.log(`Server running`)
})
