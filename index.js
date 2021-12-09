const express = require('express')
const passport = require('passport');
const bodyParser = require('body-parser')
require('dotenv').config()
const server = express();
const port = process.env.PORT || 3000

const routes = require('./routes/routes')
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')

server.use(express.json())
server.use(passport.initialize())

require("./middleware/passport")(passport);

server.use('/api', routes)
server.use('/api/auth', authRoutes)
server.use('/api/admin', adminRoutes)

server.listen(port, () => {
    console.log(`Server listening on https://localhost:${port}`)
});