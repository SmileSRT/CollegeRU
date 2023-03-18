require('dotenv').config()
const express = require('express')
const router = new express.Router()
const sequelize = require('./db')
const path = require('path')
const { url } = require('inspector')
const PORT = process.env.PORT || 5000


const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))


const start = async () => {
    try {
        await sequelize.authenticate() // waits for the users connection to db
        await sequelize.sync() // checks whether initialization done or not. Does nothing if the initialization is done
        app.listen(PORT, () => console.log(`[server]: Server started on port ${PORT}`)) // listening
    } catch (err) {
        console.log(err)
    }
}

app.post('/post', (req, res) => {
  console.log('connected to react')
  res.redirect('/')
})

start()



