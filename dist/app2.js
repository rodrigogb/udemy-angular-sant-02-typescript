"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
/* --- criar carros --- */
var carroA = new Carro_1.default('Gol', 4);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
/* --- montar lista de carros da concessionaria --- */
var listaDeCarros = new Array();
listaDeCarros.push(carroA);
listaDeCarros.push(carroB);
listaDeCarros.push(carroC);
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* --- exibir a lista de carros --- */
console.log(concessionaria.mostrarListaDeCarros());
/* --- comprar o carro --- */
var cliente = new Pessoa_1.default('Rodrigo', 'Gol');
console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
