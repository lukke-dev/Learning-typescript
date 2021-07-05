/* RECOMENDADOS */
// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qlaquer coisa';
input.focus();

/* NÃO RECOMENDADO */
// type assertion
const body4 = document.querySelector('body') as unknown as number;

// Non-null Assertion (!)
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
