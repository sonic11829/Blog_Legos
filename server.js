require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const session = require("express-session");
const MongoStore = require("connect-mongo");
const db = require('./models/db')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})
app.use(cors())
app.engine('jsx', require('jsx-view-engine').createEngine())
app.set('view engine', 'jsx')
db.once('open', () => {
  console.log('connected to MongoDB Atlas')
})

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    saveUninitialized: true,
    resave: false,
  })
)

app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use('/legos', require('./controllers/routeController'))
app.use('/user', require('./controllers/authController'))

app.listen(PORT, () => {
  console.log('Listening on PORT 3000', PORT)
})
