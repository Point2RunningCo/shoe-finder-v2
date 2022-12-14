const express = require('express')
const app = express()
// const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const shoeRoutes = require('./routes/shoe')
const brandRoutes = require('./routes/brand')

require('dotenv').config({ path: './config/.env' })

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
app.use(methodOverride('_method'))

app.use('/', mainRoutes)
app.use('/shoes', shoeRoutes)
app.use('/brands', brandRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})