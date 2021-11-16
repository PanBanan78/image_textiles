const express = require('express');
const { customerType, customer, contact, delivery, order, pricing } = require('./init');
const routes = require('./routes')

const server = express();
const port = 3000;

server.use('', routes)

server.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`)
});