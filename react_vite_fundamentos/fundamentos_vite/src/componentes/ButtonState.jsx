const ButtonState = () => {
  let count = 0;
  const handleClick = () => {
    count = count + 1;
    console.log("HandleClick: " + count);
  };
  return <button onClick={handleClick}>Buttonstate: {count}</button>;
};

export default ButtonState;
