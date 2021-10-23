let id = 0

let database = []

const gerarId = () => {
    id = id + 1

    return id
}

const ultimoVendedor = () => {
    return database[database.length - 1]
}

exports.criarVendedor = (dadosDoVendedor) => {
    database.push(
        {
            'id': gerarId(), 
            'nome': dadosDoVendedor.nome,
            'email': dadosDoVendedor.email,
            'comissao': ""
        }
    )

    return ultimoVendedor()
}

exports.listarVendedores = () => {
        return database
}