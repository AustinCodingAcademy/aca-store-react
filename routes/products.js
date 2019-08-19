const express = require('express');
let router = express.Router();
const {list, create} = require('../controllers/products')

router.get('/products', list);
router.post('/products',create)


module.exports = router