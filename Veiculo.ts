// export ???
export default class Veiculo {
    
    // protected ???
    protected modelo!: string;
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
}