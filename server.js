const express = require ('express')
const app  = express()
const port = 3000
const vendedorRoutes = require('./api/routes/vendedores')
//const vendasRoutes = require('./api/routes/vendas')


app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(vendedorRoutes)
//app.use(vendasRoutes)
    

app.listen(port, () => {
    console.log(`API server started on: ${port}`)
})
