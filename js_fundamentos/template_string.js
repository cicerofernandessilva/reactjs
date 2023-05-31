//template string
const numero = (n1) => {
  return `O valor digitado é ${n1}`;
};

console.log(numero(10));

//template string reduzido
const numero1 = (n1) => `O valor digitado é ${n1}`;

console.log(numero1(10));

const soma = (n1, n2) => `A soma del valor digitado es ${n1 + n2}`;

console.log(soma(10, 20));

//sem template string
const numero2 = (n1) => {
  return "O valor digitado é " + n1;
};

console.log(numero2(10));
