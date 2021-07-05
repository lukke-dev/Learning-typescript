let x;
if (typeof x === 'undefined') x = 20;
console.log(x);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareTwo = squareOf(2);

const squareThree = squareOf('2');

if (squareTwo === null) {
  console.log('conta invalida');
} else {
  console.log(squareTwo * 100);
}
