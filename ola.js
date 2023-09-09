const express = require("express")

//Primeira parte da configuração da rota:
//A palavra Router fica em maiúsculo porque está vindo de dentro do express. 
const router = express.Router()

const app = express()
const porta = 3333

//Função mostra olá.
function mostraOla(request, response) {
    response.send("Olá, mundo!")
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//Segunda parte da configuração da rota: enviar o endereço e dizer que quer que mostre a função mostra olá.
app.use(router.get('/ola', mostraOla))

app.listen(porta, mostraPorta)