// import { Fragment } from "react";
// import React from "react";

//import proptypes

import PropTypes from "prop-types";

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

//operador &&
const OperadorE = () => {
  return (
    <div>
      <h4>Operador &&</h4>
    </div>
  );
};

//importando imagenes

import img1 from "./assets/images/img_1.jpg";

//uso del component props del boton
const ButtonDin = (props) => {
  return <button>{props.text}</button>;
};

//uso del proptypes

ButtonDin.propTypes = {
  text: PropTypes.string.isRequired,
};

// const ItemFrut = (props) => {
//   return <li>{props.fruit}</li>;
// };
//props con desestructuraciob
const ItemFrut = ({ fruit }) => {
  return <li>{fruit}</li>;
};

const App = () => {
  //teste uso de fragment react
  //teste de interpolação
  const titleH2 = "Teste del uso de interpolacion";
  const classCenter = "text-center";
  const soma = 1 + 2;
  //ternário
  const user = true;
  const fruit = ["🍎", "🍏", "🍇", "🍐", "🍌", "🍉"];
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
        {user && <OperadorE></OperadorE>}
        <img src={img1} alt="" />
        <p>Imagene fixa</p>
        {/* listas array*/}
        <p>Array normal</p>
        <ul>
          <li>{fruit[0]}</li>
          <li>{fruit[1]}</li>
          <li>{fruit[2]}</li>
          <li>{fruit[3]}</li>
          <li>{fruit[4]}</li>
          <li>{fruit[5]}</li>
        </ul>
        {/* listas array com map*/}
        <p>Array con map</p>
        <ul>
          {fruit.map((fruit, index) => (
            <li>
              {fruit} = {index}
            </li>
          ))}
        </ul>
        <p>Array con map usando metodo key</p>
        <ul>
          {fruit.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
        {/* uso del props */}
        <ButtonDin text="buton1"></ButtonDin>
        <ButtonDin text="buton2"></ButtonDin>
        <ButtonDin text="buton3"></ButtonDin>
        <ButtonDin text="buton4"></ButtonDin>

        <p>Array con map usando metodo key y props</p>
        <ul>
          {fruit.map((fruit, index) => (
            <ItemFrut key={index} fruit={fruit}></ItemFrut>
          ))}
        </ul>
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
