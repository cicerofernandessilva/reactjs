const web = {
  nombre: "cicero",
  links: {
    enlace: "www.cicero.cl",
  },
  redesSociales: {
    youtube: {
      enlace: "www.youtube.com/Cicero",
      nombre: "MelhordeSi YT",
    },
    facebook: {
      enlace: "www.facebook.com/Cicero",
      nombre: "MelhordeSi FB",
    },
  },
};

console.log(web.redesSociales.youtube.enlace);
console.log(web.redesSociales.facebook.enlace);

const enlaceYT = web.redesSociales.youtube.enlace;
console.log(enlaceYT);

//destructuring

const { enlace, nombre } = web.redesSociales.youtube;

console.log(enlace);
console.log(nombre);
