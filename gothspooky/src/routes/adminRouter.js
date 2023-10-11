const router = require('express').Router();
const { admin } = require('../controllers/adminController');


/* GET users listing. */
router.get('/', admin);


module.exports = router;
