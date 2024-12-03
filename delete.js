const axios = require('axios');

const url = "https://jsonplaceholder.typicode.com/posts/1";

axios.delete(url)
    .then(response =>{
        console.log("recurso deletado com sucesso")
        console.log(`status da resposta: ${response.status}`)
    })
    .catch(error =>{
        console.error(`erro ao tentar deletar o recurso ${error}`)
    })