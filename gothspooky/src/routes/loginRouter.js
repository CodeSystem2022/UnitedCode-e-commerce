const express = require('express');
const { login } = require('../controllers/loginController');
const router = express.Router();


router.get('/', function(req, res, next) {
    res.render('users/login');
});

module.exports = router;