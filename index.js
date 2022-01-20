const express = require('express')
const passport = require('passport');
const bodyParser = require('body-parser')
require('dotenv').config()
const server = express();
const db = require('./db')
const port = process.env.PORT || 3000
const cors = require('cors')

const routes = require('./routes/routes')
const authRoutes = require('./routes/auth')
const adminRoutes = require('./routes/admin')

const corsOptions = {
    origin: 'http://localhost:4200'
}

// server.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
server.use(cors(corsOptions))
server.use(express.json())
server.use(passport.initialize())

require("./middleware/passport")(passport);

server.use('/api', routes)
server.use('/api/auth', authRoutes)
server.use('/api/admin', adminRoutes)

const start = async () => {
    await db.sequelize.sync({logging: false}).then( () => {
        console.log('DB force synced')
    });
    server.listen(port, () => {
        console.log(`Server listening on https://localhost:${port}`)
    });
}

start()