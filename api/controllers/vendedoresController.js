const vendedoresModels = require('../models/vendedores')

exports.criarVendedor = (req, res) => {
    let vendedorCriado = vendedoresModels.criarVendedor(req.body)

    return res.json(vendedorCriado)
} 

exports.listarVendedores = (req, res) => {
    let vendedores = vendedoresModels.listarVendedores()
    
    return res.json(vendedores)
}