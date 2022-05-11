const express = require('express')
var router = express.Router()
const controller=require('../controllers/user')

const query = require('querystring')
const bodyParser = require('body-parser')
const {builtinModules}=require('module')

router.get('/:id/orders',controller.getUserOrders)
router.get('/:user/:pass',controller.getUserById)
router.get('/',controller.getAllUsers)
router.post('/',controller.addNewUser)
router.put('/:email',controller.updateUser)
router.delete('/:email',controller.deleteUser)

module.exports = router;

