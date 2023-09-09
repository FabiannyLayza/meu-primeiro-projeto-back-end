//Lembre-se que o arquivo mulheres.js é um servidor e precisa das informações iniciais, copie do server.js:
const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

//Abaixo de const porta crie a const mulheres para guardar a lista de mulheres:
// [] Os colchetes representa os arrays de um objeto.
const mulheres = [
    {
        nome: 'Fabianny Layza', 
        imagem: 'https://avatars.githubusercontent.com/u/137013720?v=4',
        minibio: 'Nutricionista, AWS Certified Cloud Practitioner e em transição de carreira para área tech!'
    },
    {
        nome: 'Fabianny Layza', 
        imagem: 'https://avatars.githubusercontent.com/u/137013720?v=4',
        minibio: 'Nutricionista, AWS Certified Cloud Practitioner e em transição de carreira para área tech!'
    },
    {
        nome: 'Fabianny Layza', 
        imagem: 'https://avatars.githubusercontent.com/u/137013720?v=4',
        minibio: 'Nutricionista, AWS Certified Cloud Practitioner e em transição de carreira para área tech!'
    }
]

//Complemente sua função com o json e utilizando o identificador mulheres:
function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta", porta)
}

//Adicione o app.use:
app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)

//Rode no terminal node mulheres.js e espere pela resposta: servidor criado e rodando na porta 3333.
//No navegador acesse localhost:3333/mulheres e espere pela resposta.