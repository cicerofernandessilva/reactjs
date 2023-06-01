//map

const resp = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    //   console.log(data.results);

    //sem map con forEach
    // const arrayNombres = [];
    // data.results.forEach((element) => {
    //   //   console.log(element);
    //   //   console.log(element.name);
    //   arrayNombres.push(element.name);
    // });

    //con map
    const arrayNombres = data.results.map((poke) => poke.name);
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

resp();
