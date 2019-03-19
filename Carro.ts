import Veiculo from './Veiculo';

export default class Carro extends Veiculo {

    // variavel private só pode ser acessada dentro da classe
    // não pode ser acessada diretamente pelo objeto
    // somente atraves de getter e setter
    private numeroDePortas: number = 4;

    // responsável por receber os parâmetros no momento de instanciação da classe
    constructor(modelo: string, numeroDePortas: number){
        // super ???
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
}