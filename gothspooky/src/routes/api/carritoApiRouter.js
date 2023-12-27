const router = require('express').Router();
const { preferencia, feedback, prod } = require('../../controllers/api/carritoApiController');

router.post('/create_preference', preferencia);
router.get('/feedback', feedback);

router.get("/prod/:id",prod)

module.exports = router;