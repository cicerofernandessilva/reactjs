//var vs let vs const
//var
console.log("VAR");
var varEdad = 10;
console.log(varEdad);
var varEdad = 20;
console.log(varEdad);

//dentro de condicionales
if (true) {
  var varEdad = 10; //altera de modo global
  console.log(varEdad, "dentro do if");
}
console.log(varEdad, "fora do if"); // quando se declara novamente a var ela é de modo global

//com array
var varArray = [10, 20, 30];
console.log(varArray);
var varArray = [10, 20, 30, 40];
console.log(varArray);

//let
console.log("LET");
let letEdad = 10;
console.log(letEdad);
// let letEdad = 20; gera un error, no permite duas declarações
letEdad = 20; //se permite alterar o valor
console.log(letEdad);
//dentro de condicionales
if (true) {
  let letEdad = 10; //altera de modo local não afetando de modo global
  console.log(letEdad, "dentro do if");
}
console.log(letEdad, "fora do if"); // o valor do modo global permanece

//com array
let letArray = [10, 20, 30];
console.log(letArray);
letArray = [10, 20, 30, 40];
console.log(letArray);

//const
console.log("CONST");
const constEdad = 10;
console.log(constEdad);
//const constEdad = 20; gera un error, no permite duas declarações
// constEdad = 20; não se permite alterar o valor, mas existem exceções
if (true) {
  const constEdad = 20; //altera de modo local não afetando de modo global
  console.log(constEdad, "dentro do if");
}
console.log(constEdad, "fora do if"); // o valor do modo global permanece

//com array
const constArray = [10, 20, 30];
console.log(constArray);
// contArray = [10, 20, 30, 40]; não se permite incluir datos deste modo, é necessario usar los methodos do Array
console.log(constArray);
constArray.push(10); //metodo para agregar nuevos elementos
console.log(constArray);

//com objeto é similar al array

const persona = {
  nombre: "Cicero",
  edad: 20,
};
console.log(persona);
// const persona = {
//   nombre: "Cicero",
//   edad: 20,
//   trbajo: "Eletrotecnico",
// }; gera un error

//metodos do objeto
persona.trabajo = "Eletrotecnico";
console.log(persona);
