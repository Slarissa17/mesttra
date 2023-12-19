// Criando uma API (application programming interface)
// importamos o express
const express = require('express');
const crypto = require('crypto');
const cors =  require('cors');


// INICIALIZA UM SERVIDOR WEB COM EXPRESS

const app = express();  // inicializa uma aplicação express (é como se pegasse toda a aplicação web e colocando dentro da constante web)


// USO O MIDDLEWARE PARA RESOLVER O PROBLEMA DE CORS
app.use(cors())


// FALAMOS PRO EXPRESS USAR O MIDDLEWARE PARA TRABALHARMOS COM JSON
app.use(express.json()); // permite a utilização de middlewares (intermediários entre a aplicação) - nesse caso vai garantir q o tipo de dado é json

// REST - get, put, delete, post
app.get('/', (req, res) => {   
    res.send("Olá mundo");      //quando bater no endpoint / responda "Olá mundo"
    console.log(req)
});

// Defino uma porta de rede pra rodar meu servidor web
const port = 3000;
app.listen(port, () => {  // vai escutar requisições na porta 3000
    
    console.log("O app está rodando na porta 3000")
})


// Criar uma lista de tarefas pré-cadastradas
const tarefas = [
    {
        id: crypto.randomUUID(), // CRIA UM ID RANDOM 
        text: "Ir ao mercado",
        prazo: ' 2 dias'
    }, 

    {
        id: crypto.randomUUID(),
        text: "Estudar sobre git",
        prazo: '3 dias'
    }, 
    {
        id: crypto.randomUUID(),
        text: "Esyudar javascript",
        prazo: '10 dias'
    }
]


// Rota que lista todas as tarefas pré-cadastradas
app.get('/tarefas', (req, res) => {  // o middleware vai fazer retornar um json
    res.send(tarefas)
})


// Rota que busca por uma tarefa especifica

app.get('/tarefas/:id', (req, res) => {
    // acessar o parâmetro da url
    const idParam =  req.params.id;        // O params é o objeto que manda os parâmetros para a requisição
    console.log(idParam);

    // Buscar o item na lista de acordo com seu ID
    const tarefa = tarefas.find((tarefa) =>  tarefa.id == idParam);
    // Retorna uma tarefa única pelo seu id
    res.send(tarefa);
})