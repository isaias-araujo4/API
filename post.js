const axios = require('axios')

const url = "https://jsonplaceholder.typicode.com/posts"

//Dados que queremos enviar para API (Um novo post, por exemplo)
const novoPost = {
    title: "Aprendenfo integração de API",
    body: "Este é um exemplo de como fazer uma requisição POST usando",
    userId: 1
}

//Fazendo uma requisição POST para criar um novo recurso na API
axios.post(url, novoPost)
    .then(response =>{
        //Se a reuisição foi bem-sucedida, a aquisição da API estará aqui
        console.log("Recurso criado com sucesso")
        console.log(response.data)
    })
    .catch(error =>{
        //Se ocorrer um erro, ele será capiturado aqui
        console.error(`Erro ao tentar criar o recurso: ${error}`)
    })