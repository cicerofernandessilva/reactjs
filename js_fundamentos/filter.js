//filter

const resp = async () => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();

    //filter
    const arrayNombres = data.results.filter(
      (poke) => poke.name !== "bulbasaur"
    );
    console.log(arrayNombres);
  } catch (error) {
    console.log(error);
  }
};

resp();
