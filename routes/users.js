const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send('REGISTER');
});

//Authenicate
router.get('/auth', (req, res, next) => {
    res.send('Authenication');
});

//Profile protected with authenication token
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

//Validate the user
router.get('/validate', (req, res, next) => {
    res.send('Validate the user token');
});





module.exports = router;