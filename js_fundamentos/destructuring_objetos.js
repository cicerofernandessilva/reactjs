//destructuring objetos

const mascota = {
  nombre: "Tom",
  edad: 10,
  vivo: true,
};

// const { nombre, edad, vivo } = mascota;
const { edad, nombre, vivo } = mascota;

console.log(nombre);
console.log(edad);
console.log(vivo);

//antes

const edad1 = mascota.edad;

console.log(edad);
