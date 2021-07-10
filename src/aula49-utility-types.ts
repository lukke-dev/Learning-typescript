// generics padrão

//      TYPE RECORD
const obj1: Record<string, string | number> = {
  nome: 'luiz',
  sborenome: 'miranda',
  idade: 30,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

//          TYPE REQUIRED - TORNA TUDO REQUERIDO
type PessoaRequired = Required<PessoaProtocol>;

//         TYPE PARTIAL - TORNA TUDO NÃO REQUERIDO
type PessoaPartial = Partial<PessoaRequired>;
const obj2: PessoaProtocol = {
  nome: 'luiz',
  sobrenome: 'miranda',
  idade: 30,
};

//         TYPE READONLY
type PessoaReadonly = Readonly<PessoaRequired>;

//        TYPE PICK
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

console.log(obj1, obj2);

//  EXTRACT and EXCLUDE
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type tipoExtract = Extract<ABC, CDE>;

// fd
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
};
// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dfdsfsdfdsfd',
  name: 'lucas',
  age: 30,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountMongo);
console.log();
console.log('API: ');
console.log(accountApi);
// Module Mode
export default 1;
