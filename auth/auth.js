const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const jsonStrategy = require('passport-json').Strategy;
const account = require('../new_models/account')

passport.use(
    'signup',
    new jsonStrategy(
      {
        passReqToCallback: false
      },
      async (username, password, done) => {
        try {
          console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!', username)
          const user = await account.create({ name: username, password: password })
  
          return done(null, user)
        } catch (error) {
          console.log(error)
        }
      }
    )
  )

  passport.use(
    'login',
    new localStrategy(
      {
        nameField: 'name',
        passwordField: 'password'
      },
      async (name, password, done) => {
        try {
          const user = await account.findOne({where: { name: name }})
  
          if (!user) {
            return done(null, false, { status: 'Failed', message: 'User not found' })
          }
  
          const validate = await user.ValidatePassword(password)
  
          if (!validate) {
            return done(null, false, { message: 'Wrong Password' })
          }
  
          return done(null, user, { message: 'Logged in Successfully' })
        } catch (error) {
          return done(error)
        }
      }
    )
  )
