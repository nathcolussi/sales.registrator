const express = require('express')
const router = express.Router()
const vendedoresController = require('../controllers/vendedoresController')

router.post('/vendedor', vendedoresController.criarVendedor)
router.get('/vendedores', vendedoresController.listarVendedores)

module.exports = router
