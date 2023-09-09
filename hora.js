//Código para quando acessar o endereço localhost:3333/hora no navegador, receber a hora local. 
const express = require('express')
const router = express.Router()
const app = express()

const porta = 3333

function mostraHora(request, response) {
    const data = new Date()
    const hora = data.toLocaleTimeString('pt-BR')
    response.send(hora)
}

function mostraPorta() {
    console.log('Servidor criado e rodando na porta', porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)

//Rode no terminal node hora.js e espere pela resposta: servidor criado e rodando na porta 3333.
//No navegador acesse localhost:333/hora e espere pela resposta.