let olaUsuario = (nome: string, sobrenome: string) => {
    console.log('Olá ' + nome + sobrenome);
}

olaUsuario('Rodrigo', 'Garcia');

let mensagem: string = 'Seja bem vindo';
let temporadasFriends: number = 10;
let estudandoAngular: boolean = true;

let listaDeFrutas: Array<string> = ['Uva', 'Banana', 'Abacaxi']; // forma 1 de criar array em ts
let listaDeFrutas2: string[] = ['Uva', 'Banana', 'Abacaxi']; // forma 2 de criar array em ts

listaDeFrutas.forEach(fruta => {
    console.log(fruta);
});




// Explicação da diferença entre ES5, ES6 e TypeScript
// Instalação do TypeScript

// comandos ensinados:
// tsc app.ts para converter de ts para js
// tsc -w para monitorar o arquivo ts sem precisar ficar convertendo manualmente

// tsc -init para criar o arquivo tsconfig.json
// esse arquivo serve para configurar a compilação de ts para js
