const express = require("express");
const router = express.Router();
const {show, create, updateCart} = require('../controllers/users');

router.get('/', show)
router.post('/',create)
router.put('/', updateCart)
// router.post('/', createUser)
module.exports = router;