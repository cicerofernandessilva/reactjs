const MyButtonClic = ({ text }) => {
  // console.log(text);
  const handleClick = (title) => {
    console.log("Me deste click: " + title);
  };
  return <button onClick={() => handleClick(text)}>{text}</button>;
};

export default MyButtonClic;
