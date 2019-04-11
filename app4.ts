import { ConcessionariaDao } from './ConcessionariaDao';
import { PessoaDao } from './PessoaDao';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import { Dao } from './Dao';

let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

concessionariaDao.inserir(concessionaria);

let pessoaDao: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa('Rod','Gar');

pessoaDao.inserir(pessoa);

// Generics
// Utilizamos generics para trabalhar com qualquer tipo de dado
let dao3: Dao<Pessoa> = new Dao();
dao3.inserir(pessoa);
