const dadosCliente: readonly [number, string] = [1, 'luiz'];

// dadosCliente[0] = 100;
// dadosCliente[1] = 'carlos';
console.log(dadosCliente);

// readonly
const array2: readonly string[] = ['luiz', 'otavio'];
const array: ReadonlyArray<string> = ['luiz', 'otavio'];

console.log(array2, array);
