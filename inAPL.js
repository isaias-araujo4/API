const axios = require('axios')

const url = "https://jsonplaceholder.typicode.com/todos/1"

// Fazendo uma requisição GET
axios.get(url)
    .then(response => {
        //Dados recebidos da API
        console.log("Dados recebidos da API: ")
        console.log(response.data)
    })
    .catch(erro =>{
        //Tratamrnto de erro
        console.log(`Erro ao acessar a API: ${error}`)
    })