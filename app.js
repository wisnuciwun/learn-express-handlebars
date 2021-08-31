const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const mySql = require('mysql')
const routes = require('./server/routes/drinks')

// const pool = mySql.createPool({ 
//     connectionLimit: 100,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     user: 'r',
// })

// pool.getConnection((err, con) => {
//     if(err) throw err;
//     console.log("connected", con)
// })

require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`yees run ${PORT}`))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.engine('hbs', exphbs({extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use('/', routes)

// app.get('', (req, res) => {res.render('home')})
