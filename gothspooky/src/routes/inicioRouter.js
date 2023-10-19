const router = require('express').Router();
const { inicio } = requiere('../controllers/inicioController');

/* GET users listing. */
router.get('/', inicio);

module.exports = router;
 