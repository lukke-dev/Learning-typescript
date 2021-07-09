type MeuTipo = number;
const arrayNumbers: Array<number> = [1, 2, 3, 4, 5, 6];

console.log(arrayNumbers);

async function promiseAsync(): Promise<MeuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

async function promise2() {
  return 1;
}

promiseAsync().then((result) => console.log(result + 1));
promise2().then((result) => console.log(result + 1));
