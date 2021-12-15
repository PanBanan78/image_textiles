const { Strategy, ExtractJwt } = require("passport-jwt");
const db = require('../db')
const Account = db.account

require('dotenv').config()

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
  }
  
  module.exports = passport => {
    passport.use(
      new Strategy(opts, async (payload, done) => {
        await Account.findOne({where: {username: payload.username}})
          .then(user => {
            if (user) {
              return done(null, user)
            }
            return done(null, false)
          })
          .catch(err => {
            return done(null, false)
          })
      })
    )
  }