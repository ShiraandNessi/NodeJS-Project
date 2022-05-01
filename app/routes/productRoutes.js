var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/*
 * GET
 */
router.get('/', productController.list);

/*
 * GET
 */
router.get('/:categoryId', productController.show);

/*
 * POST
 */
router.post('/', productController.create);


module.exports = router;
