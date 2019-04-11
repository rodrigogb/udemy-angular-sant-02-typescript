// importa a classe Veiculo do arquivo Veiculo
import Veiculo from './Veiculo';

// extends estabelece a herança
// uma classe só pode extender apenas uma outra classe, nao mais que uma
export default class Carro extends Veiculo {

    // variavel private só pode ser acessada dentro da classe
    // não pode ser acessada diretamente pelo objeto
    // somente atraves de getter e setter
    private numeroDePortas: number = 4;

    // responsável por receber os parâmetros no momento de instanciação da classe
    constructor(modelo: string, numeroDePortas: number){
        // super ajusta o contexto das variaveis com a heranca
        // assim o construtor reconhecerá a variavel modelo
        // no java, passaríamos o modelo para o super
        // no ts isso nao é necessário
        super();
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
}