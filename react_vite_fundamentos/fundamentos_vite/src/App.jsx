// import { Fragment } from "react";
import React from "react";

const App = () => {
  //teste uso de fragment react
  //teste de interpolação
  const titleH2 = "Teste del uso de interpolacion";
  const classCenter = "text-center";
  const soma = 1 + 2;
  return (
    <>
      <h1 className="text-center">Hola React!</h1>
      <img src="https://picsum.photos/800/600" alt="" />

      {/* uso de interpolacion */}
      <h2 className={classCenter}>{titleH2}</h2>
      <p className={classCenter}>A soma de 1 mais 2 é {soma}</p>
    </>
  );
  // return (
  //   <div>
  //     <img src="https://picsum.photos/800/600" alt="" />
  //     <h1 className="text-center">Hola React!</h1>
  //   </div>
  // );
  // return (
  //   <fragment>
  //     <h1 className="text-center">Hola React!</h1>
  //     <img src="https://picsum.photos/800/600" alt="" />
  //   </fragment>
  // );
  // return (
  //   <React.Fragment>
  //     <h1 className="text-center">Hola React!</h1>
  //     <img src="https://picsum.photos/800/600" alt="" />
  //   </React.Fragment>
  // );
};

export default App;
