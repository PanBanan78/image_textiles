const express = require('express')
const body_parser = require('body-parser')
require('dotenv').config()
const routes = require('./routes')

const server = express();
const port = process.env.PORT || 3000

server.use(express.json())

server.use('', routes)

server.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`)
});