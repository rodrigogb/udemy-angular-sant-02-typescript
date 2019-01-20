let ola = (nome: string, sobrenome: string) => {
    console.log('Olá ' + nome + sobrenome);
}

ola('Rodrigo', 'Garcia');

let mensagem: string = 'Seja bem vindo';
let temporadasFriends: number = 10;
let estudandoAngular: boolean = true;

let listaDeFrutas: Array<string> = ['Uva', 'Banana', 'Abacaxi'];
let listaDeFrutas2: string[] = ['Uva', 'Banana', 'Abacaxi'];


// Explicação da diferença entre ES5, ES6 e TypeScript
// Instalação do TypeScript

// comandos ensinados:
// tsc app.ts para converter de ts para js
// tsc -w para monitorar o arquivo ts sem precisar ficar convertendo manualmente