const express = require("express")
//Configuração da rota
const router = express.Router()

const app = express()
const porta = 3333

//Adicione a função mostraMulher() e o objeto.
//json é uma forma de enviar pela internet várias informações
function mostraMulher(request, response) {
response.json({
    nome: 'Fabianny Layza', 
    imagem: 'https://avatars.githubusercontent.com/u/137013720?v=4',
    minibio: 'Nutricionista, AWS Certified Cloud Practitioner e em transição de carreira para área tech!'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//Configuração da rota
//Definição da função mostraMulher
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)

//Rode no terminal node mulher.js e espere pela resposta: servidor criado e rodando na porta 3333.
//No navegador acesse localhost:3333/mulher e espere pela resposta.