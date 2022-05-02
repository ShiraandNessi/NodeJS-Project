var express = require('express');
var router = express.Router();
var orderController = require('../controllers/orderController.js');



/*
 * GET
 */
router.get('/:id', orderController.show);

/*
 * POST
 */
router.post('/', orderController.create);

/*
 * PUT
 */
router.put('/:id', orderController.update);

module.exports = router;
