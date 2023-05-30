//function

//normal
console.log("Normal");
function sumar(n1, n2) {
  console.log("O resultado da soma é: ");
  console.log(n1 + n2);
}

sumar(1, 2);

const sumarFunct = function (n1, n2) {
  console.log("O resultado da soma é: ");
  console.log(n1 + n2);
};
sumarFunct(10, 20);

//de flecha - reduzida - anonima
console.log("Flecha");
const sumarFlecha = (n1, n2) => {
  console.log("O resultado da soma é: ");
  console.log(n1 + n2);
};
sumarFlecha(10, 20);
//reducindo o código
const sumarFlecha2 = (n1, n2) => n1 + n2;
console.log("O resultado da soma é: ", sumarFlecha2(10, 20));

const msg = (nombre) => "Hola, soy " + nombre;
console.log(msg("Cicero"));

const sumarTres = (n = 4) => console.log(n + 3); // uso de um valor padrão para caso de não enviar nada
sumarTres(9);
console.log("sem envio de nada");
sumarTres();
