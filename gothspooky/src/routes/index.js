const express = require('express');
const { home } = require('../controllers/indexController');
const router = express.Router();

/* GET home page. */
router.get('/', home);

module.exports = router;
