const objectA: {
  readonly keyA: string;
  keyB: string;
  keyC?: string;
  [key: string]: unknown;
} = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyB = 'new value';
objectA.keyC = 'new value 2';

console.log(objectA);
