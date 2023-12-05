const router = require('express').Router();
const { preferencia, feedback } = require('../../controllers/api/carritoApiController');

router.post('/create_preference', preferencia);
router.get('/feedback', feedback);

module.exports = router;