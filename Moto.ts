import Veiculo from './Veiculo';

export class Moto extends Veiculo {
    // sobreescrita do metodo de Veiculo
    public acelerar(): void {
        this.velocidade =+ 20;
    }
}
// podemos exportar a classe dessa forma tambem
export default Moto;