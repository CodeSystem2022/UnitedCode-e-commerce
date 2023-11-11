const express = require('express');
const { category } = require('../controllers/categoriaController.js');
const router = express.Router();

/* GET users listing. */
router.get('/:categoria', category);

module.exports = router;