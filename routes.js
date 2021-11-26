const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const router = express.Router()
const Account = require('./models/account')



router.get('/', (req, res) => {
    res.send('Hello world!')
    // const foo = Account.create({name:'bigman_like_drew', type:'pleb', password:'1234'})
})

router.post('/register', passport.authenticate('signup', { session: false }), async (req, res, next) => {
    res.json({message: 'Signup successful', user: req.user});
})

router.post('/login', async (req, res, next) => {
    passport.authenticate(
      'login',
      async (err, user, info) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const body = { _id: user.id, username: user.name };
              const token = jwt.sign({ user: body }, 'TOP_SECRET');

              return res.json({ token });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  })

router.get('/get_accounts', async (req, res) => {
    let accounts = await Account.findAll()

    res.send(accounts)
})

router.get('/sync_tables', async (req, res) => {
    // Syncs the tables by force
    syncTables = require('./models/syncTables')

    res.send({success: true, message: 'Synced the tables'})
})

module.exports = router