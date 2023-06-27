// import { Fragment } from "react";
// import React from "react";

//import proptypes

import PropTypes from "prop-types";

//components
import MyButton from "./componentes/MyButton";
//uso del detecion del click

import MyButtonClic from "./componentes/MyButtonClick";

//Operador ternário
const OperadorTrue = "Sin, ustede acerto el operador";
const OperadorFalse = "No, ustede no acerto el operador";

import OnlineApp from "./componentes/OnlineApp";

import OfflineApp from "./componentes/OfflineApp";

//operador &&
import OperadorE from "./componentes/OperadorE";
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

//Checar usuário 2

// const CheckUser = ({ user }) => {
//   if (user) {
//     return <p>User Online😄</p>;
//   }
//   return <p>User Offline😫</p>;
// };

import CheckUser from "./componentes/CheckUser";
import FruitList from "./componentes/FruitList";
import FruitListTwo from "./componentes/FruitListTwo";
import Fruit from "./componentes/fruit";
import ButtonState from "./componentes/ButtonState";

const App = () => {
  //teste uso de fragment react
  //teste de interpolação
  const titleH2 = "Teste del uso de interpolacion";
  const classCenter = "text-center";
  const soma = 1 + 2;
  //ternário
  const user = true;
  const fruitTwo = ["🍈", "🍉", "🍐"];

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
      </div>
      <div className="grid-container">
        <div className="grid-item">
          {/* listas array*/}
          <p>Array normal</p>
          <ul>
            <li>{Fruit[0]}</li>
            <li>{Fruit[1]}</li>
            <li>{Fruit[2]}</li>
            <li>{Fruit[3]}</li>
            <li>{Fruit[4]}</li>
            <li>{Fruit[5]}</li>
          </ul>
        </div>
        <div className="grid-item">
          {/* listas array com map*/}
          <p>Array con map</p>
          <ul>
            {Fruit.map((Fruit, index) => (
              <li>
                {Fruit} = {index}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid-item">
          <p>Array con map usando metodo key</p>
          <ul>
            {Fruit.map((Fruit, index) => (
              <li key={index}>{Fruit}</li>
            ))}
          </ul>
        </div>
        <div className="grid-item">
          {/* uso del props */}
          <ButtonDin text="buton1"></ButtonDin>
          <ButtonDin text="buton2"></ButtonDin>
          <ButtonDin text="buton3"></ButtonDin>
          <ButtonDin text="buton4"></ButtonDin>
        </div>
        <div className="grid-item">
          <p>Array con map usando metodo key y props</p>
          <FruitList fruit={Fruit} />
        </div>
        <div className="grid-item">
          <p>Array con map usando metodo key y props 2</p>
          <FruitListTwo fruit={fruitTwo} />
        </div>
        <div className="grid-item">
          {/* User online or Offline */}
          <CheckUser user={user} />
        </div>
        <div className="grid-item">
          {/* detecion del click*/}
          <MyButtonClic text="buton1" />
          <MyButtonClic text="buton2" />
          <MyButtonClic text="buton3" />
          <MyButtonClic text="buton4" />
          <ButtonState></ButtonState>
        </div>
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
