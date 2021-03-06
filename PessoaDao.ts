import { DaoInterface } from './DaoInterface';
import Pessoa from './Pessoa';

export class PessoaDao implements DaoInterface<object> {
    
    nomeTabela: string = 'tb_pessoa';
    
    inserir(pessoa: Pessoa): boolean {
        console.log('logica de insert');
        return true;
    }
    atualizar(pessoa: Pessoa): boolean {
        console.log('logica update');
        return true;
    }
    remover(id: number): Pessoa {
        console.log('logica delete');
        return new Pessoa('', '');

    }
    selecionar(id: number): Pessoa {
        console.log('logica select');
        return new Pessoa('', '');
    }

    selecionarTodos(): [Pessoa] {
        console.log('logica select all');
        return [new Pessoa('', '')];
    }

}