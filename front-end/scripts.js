// CONECTANDO O BACK COM O FRONT
const chamadaApi = fetch('http://localhost:3001/tarefas');       // O fetch fornece tudo oq precisamos pra fazer comunicação http
console.log(chamadaApi);

// o fetch é uma função assíncrona e trabalha com promisses