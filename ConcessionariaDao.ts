import { DaoInterface } from './DaoInterface';
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface<object> {
    
    nomeTabela: string = 'tb_concessionaria';
    
    inserir(concessionaria: Concessionaria): boolean {
        console.log('logica de insert na ' + this.nomeTabela);
        return true;
    }
    atualizar(concessionaria: Concessionaria): boolean {
        console.log('logica update na ' + this.nomeTabela);
        return true;
    }
    remover(id: number): Concessionaria {
        console.log('logica delete na ' + this.nomeTabela);
        return new Concessionaria('', []);

    }
    selecionar(id: number): Concessionaria {
        console.log('logica select na ' + this.nomeTabela);
        return new Concessionaria('', []);
    }

    selecionarTodos(): [Concessionaria] {
        console.log('logica select all na ' + this.nomeTabela);
        return [new Concessionaria('', [])];
    }

}