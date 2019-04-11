// interface funciona como um contrato para dizer como uma determinada classe deve implementar seus metodos
// quando uma classe implementa uma interface ela obrigatoriamente deve ter os metodos da interface
// aqui dizemos que qualquer Concessionaria deve 'fornecerHorarioDeFuncionamento()'
export default interface ConcessionariaInterface {
    fornecerHorarioDeFuncionamento(): string;
}