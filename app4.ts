import { ConcessionariaDao } from './ConcessionariaDao';
import { PessoaDao } from './PessoaDao';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import { Dao } from './Dao';

let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

dao.inserir(concessionaria);

let dao2: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('','');

dao2.inserir(pessoa);

// Generics
let dao3: Dao<Pessoa> = new Dao();
dao3.inserir(pessoa);
