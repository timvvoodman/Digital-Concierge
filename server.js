const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const PORT = process.env.PORT || 3001
const app = express()
const path = require('path')
const db = require('./app/models')

var corsOptions = {
  origin: 'http://localhost:8081',
}
///MIDDLEWARE///
app.use(express.json())
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

///Routes///
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/yelp.routes')(app)

///CONNECT TO MONGODB///
const dbConfig = require('./app/config/db.config')
db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connect to MongoDB.')
  })
  .catch((err) => {
    console.error('Connection error', err)
    process.exit()
  })

//Initialize Server//
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
