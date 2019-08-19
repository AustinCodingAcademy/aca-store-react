const express = require("express");
const router = express.Router();
const { list, show, create } = require("../");

router.get("/products", list);
router.get("/products/:id", show);

module.exports = router;
