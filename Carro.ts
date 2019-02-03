import Veiculo from './Veiculo';

export default class Carro extends Veiculo {

    private numeroDePortas: number = 4;

    constructor(modelo: string, numeroDePortas: number){
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
}