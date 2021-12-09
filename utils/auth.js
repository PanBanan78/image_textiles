const Account = require('../models/account')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const passport = require('passport')

require('dotenv').config()

const userRegister = async (userDetails, res) => {
  try {
    // Validate the username
    let usernameNotTaken = await validateUsername(userDetails.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: `Username is already taken.`,
        success: false
      });
    }
    // create a new user
    const newUser = await Account.create({...userDetails})

    return res.status(201).json({
      message: "Signup successful, please login",
      success: true
    });
  } catch (err) {
    // Implement logger function (winston)
    return res.status(500).json({
      message: "Unable to create your account.",
      success: false
    });
  }
};

const userLogin = async (loginDetails, res) => {
  const {username, password} = loginDetails

  const user = await Account.findOne({where: {username: username}})

  // Check if user exists
  if(!user) {
    return res.status(403).json({
      message: 'Invalid login details',
      success: false
    })
  }

  // Check if password provided is correct

  const passwordMatch = await bcrypt.compare(password, user.password)

  if(passwordMatch) {
    // Create token and assign to user

    const token = jwt.sign({
      username: user.username,
      role: user.role
    },
    process.env.SECRET,
    {expiresIn: "7 days"}
    )

    const resObject = {
      username: user.username,
      role: user.role,
      token: `Bearer ${token}`,
      expiresIn: 168
    }

    return res.status(200).json({
      ...resObject,
      message: 'Successfully logged in',
      success: true
    })
  } else {
    return res.status(403).json({
      message: 'Invalid login details',
      success: false
    })
  }
}

const userAuth = passport.authenticate("jwt", { session: false });

const checkRole = roles => (req, res, next) =>
  !roles.includes(req.user.role)
    ? res.status(401).json("Unauthorized")
    : next();

const validateUsername = async username => {
  let user = await Account.findOne({where: {username: username}});
  return user ? false : true;
};


module.exports = {
  userRegister,
  userLogin,
  userAuth,
  checkRole
}