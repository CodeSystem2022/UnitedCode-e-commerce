const router = require("express").Router();
const { detail } = require("../controllers/productController")

router.get("/:id", detail);




module.exports = router;
