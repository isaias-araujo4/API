const axios = require('axios');
const readline = require('readline');  

const url = "https://jsonplaceholder.typicode.com/todos/1";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function menu() {
    console.log("\nEscolha a opção que deseja utilizar:");
    console.log("1 - Pegar informações da API");
    console.log("2 - Enviar dados para a API");
    console.log("3 - Atualizar dados da API");
    console.log("4 - Deletar dados da API");
    console.log("5 - Sair");

    rl.question('Digite o número da opção: ', (input) => {
        const n = parseInt(input);  

        if (isNaN(n)) {
            console.log("Por favor, insira um número válido.");
            menu(); 
            return;
        }

        switch (n) {
            case 1:
                // Fazendo uma requisição GET
                axios.get(url)
                    .then(response => {
                        console.log("Dados recebidos da API: ");
                        console.log(response.data);
                        menu(); 
                    })
                    .catch(error => {
                        console.log(`Erro ao acessar a API: ${error}`);
                        menu(); 
                    });
                break;

            case 2:
                const novoPost = {
                    title: "Aprendendo integração de API",
                    body: "Este é um exemplo de como fazer uma requisição POST usando",
                    userId: 1
                };

                axios.post(url, novoPost)
                    .then(response => {
                        console.log("Recurso criado com sucesso");
                        console.log(response.data);
                        menu(); 
                    })
                    .catch(error => {
                        console.error(`Erro ao tentar criar o recurso: ${error}`);
                        menu(); 
                    });
                break;

            case 3:
                const dadosAtualizados = {
                    title: "titulo atualizado com put",
                    body: "exemplo de uma requisição put",
                    userID: 1
                };

                axios.put(url, dadosAtualizados)
                    .then(response => {
                        console.log("Recurso atualizado com sucesso");
                        console.log(response.data);
                        menu(); 
                    })
                    .catch(error => {
                        console.error(`Erro ao tentar atualizar o recurso: ${error}`);
                        menu(); 
                    });
                break;

            case 4:
                axios.delete(url)
                    .then(response => {
                        console.log("Recurso deletado com sucesso");
                        console.log(`Status da resposta: ${response.status}`);
                        menu(); 
                    })
                    .catch(error => {
                        console.error(`Erro ao tentar deletar o recurso: ${error}`);
                        menu(); 
                    });
                break;

            case 5:
                console.log("Saindo...");
                rl.close(); 
                break;

            default:
                console.log("Opção inválida.");
                menu(); 
                break;
        }
    });
}


menu();
