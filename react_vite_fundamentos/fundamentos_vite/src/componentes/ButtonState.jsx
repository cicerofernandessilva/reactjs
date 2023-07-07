import { useState } from "react";

const ButtonState = () => {
  // let count = 0;
  const arrayState = useState(0);
  const stateNumber = arrayState[0];
  const stateFunction = arrayState[1];
  //destructuracion
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // count = count + 1;
    // console.log("HandleClick: " + count);
    stateFunction(stateNumber + 1);
  };
  const handleClick2 = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={handleClick}>Buttonstate: {stateNumber}</button>
      <button onClick={handleClick2}>Buttonstate: {count}</button>
    </>
  );
};

export default ButtonState;
