//props con desestructuraciob
import Fruit from "./fruit";

const ItemFruit = () => {
  // return <li>{fruit}</li>;
  return (
    <>
      {Fruit.map((Fruit, index) => (
        <li key={index}>{Fruit}</li>
      ))}
    </>
  );
};

export default ItemFruit;
