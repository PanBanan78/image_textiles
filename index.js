const express = require('express')
const passport = require('passport');
const bodyParser = require('body-parser')
require('dotenv').config()
require('./auth/auth')
const routes = require('./routes')

const server = express();
const port = process.env.PORT || 3000

server.use(express.json())

// server.use(express.urlencoded({ extended: false }))

server.use(passport.initialize())

server.use('', routes)

server.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`)
});