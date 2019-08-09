const express = require("express");
const router = express.Router();
const {list, show, create} = require("../Controllers/productController");

router.get("/products", list);
router.get("/products/:id", show);
router.get("/products", create);

module.exports = router;