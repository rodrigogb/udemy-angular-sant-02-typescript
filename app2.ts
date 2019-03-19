import Carro from './Carro';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';

/* --- criar carros --- */
let carroA = new Carro('Gol', 4);
let carroB = new Carro('Veloster', 3);
let carroC = new Carro('Cerato', 4);

/* --- montar lista de carros da concessionaria --- */
let listaDeCarros: Array<Carro> = new Array<Carro>();
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros);

/* --- exibir a lista de carros --- */
console.log(concessionaria.mostrarListaDeCarros());

/* --- comprar o carro --- */
let cliente = new Pessoa('Rodrigo', 'Gol');
console.log(cliente.dizerCarroPreferido());

// map faz um loop em casa posicao do array ao enviarmos uma funcao de callback como parametro
// semelhante a um for each
concessionaria.mostrarListaDeCarros().map((carro: Carro) => { 
    
    if(carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }

 });

 console.log(cliente.dizerCarroQueTem());