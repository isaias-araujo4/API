const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/posts/1";

const dadosAtualizados = {
    title:  "titulo atualizado com put",
    body: "exemplo de uma requisição put",
    userID: 1
}

axios.put(url, dadosAtualizados)
    .then(response =>{
        console.log("recurso atualizado com sucesso")
        console.log(response.data)
    })
    
    .catch(error =>{
        console.error (`erro ao tentar atualizar o recurso: ${error}`)
    })

