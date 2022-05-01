const express = require('express')
var router = express.Router()
const controller=require('../controllers/user')

const query = require('querystring')
const bodyParser = require('body-parser')
const {builtinModules}=require('module')
router.get('/',controller.getAllUsers)
router.get('/userById/:user/:pass',controller.getUserById)
router.post('/',controller.addNewUser)
router.put('/:email',controller.updateUser)
router.delete('/:email',controller.deleteUser)

module.exports = router;

