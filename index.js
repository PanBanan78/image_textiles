const express = require('express')
const passport = require('passport');
const bodyParser = require('body-parser')
require('dotenv').config()
const routes = require('./routes')
const server = express();
const port = process.env.PORT || 3000

server.use(express.json())
server.use(passport.initialize())

require("./middleware/passport")(passport);

server.use('', routes)

server.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`)
});