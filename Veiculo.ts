// exporta o modulo Veiculo para poder ser importado por outro arquivo
// ao dar export, transformamos o Veiculo em um Modulo
// só pode existir uma exportação default por arquivo.
// a exportação default permite uma importação diferente fora dos parenteses. 
// ex: import Carro, {OutraClasse} from './Carro'
export default class Veiculo {
    
    // protected permite que classes herdadas de Veiculo possam modificar a variavel
    // private não permitiria isso, apenas Veiculo poderia acessar a variavel.
    // ponto de exclamaçao: ???
    protected modelo: string = '';
    protected velocidade: number = 0;
   
    // metodo void nao retorna nada ao ser chamado
    // private nao pode ser acessado pela instancia do objeto
    // public pode
    public acelerar(): void {
        this.velocidade =+ 10;
    }

    public parar(): void {
        this.velocidade = 0;
    }

    public velocidadeAtual(): number {
        return this.velocidade;
    }

    public getModelo(): string {
        return this.modelo;
    }
}