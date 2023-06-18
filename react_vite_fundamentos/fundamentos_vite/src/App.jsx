// import { Fragment } from "react";
// import React from "react";

//components
const MyButton = () => {
  return <button>Hola React! Soy un boton!</button>;
};

//Operador ternário
const OperadorTrue = "Sin, ustede acerto el operador";
const OperadorFalse = "No, ustede no acerto el operador";

const OnlineApp = () => {
  return (
    <div>
      <h3>Online</h3>
    </div>
  );
};
const OfflineApp = () => {
  return (
    <div>
      <h3>Offline</h3>
    </div>
  );
};

const App = () => {
  //teste uso de fragment react
  //teste de interpolação
  const titleH2 = "Teste del uso de interpolacion";
  const classCenter = "text-center";
  const soma = 1 + 2;
  //ternário
  const user = false;
  return (
    <>
      <div className="text-center">
        <h1 className="text-center">Hola React!</h1>
        <img src="https://picsum.photos/800/600" alt="" />

        {/* uso de interpolacion */}
        <h2 className={classCenter}>{titleH2}</h2>
        <p className={classCenter}>A soma de 1 mais 2 é {soma}</p>
        <MyButton></MyButton>
        <p className={classCenter}>{user ? OperadorTrue : OperadorFalse}</p>
        {user ? (
          <OnlineApp className={classCenter}></OnlineApp>
        ) : (
          <OfflineApp className={classCenter}></OfflineApp>
        )}
      </div>
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
