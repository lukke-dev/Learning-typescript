// Encadeamento opcional=?  e operador de coalescência nula = ?? - so undefined e null
type Doc = {
  titulo: string;
  text: string;
  data?: Date;
};

const documento: Doc = {
  titulo: 'o titulo',
  text: 'o texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString() ?? 'ixi,não existe data');
console.log(undefined ?? '2 ixi,não existe data');
console.log(null ?? '3 ixi,não existe data');

// Operador de coalescência nula
