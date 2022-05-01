var express = require('express');
var router = express.Router();
var categoryController = require('../controllers/categoryController.js');

/*
 * GET
 */
router.get('/', categoryController.list);
/*
 * POST
 */
router.post('/', categoryController.create);
module.exports = router;