import ItemFruit from "./ItemFruit";

// import Fruit from "./fruit";

const FruitList = () => {
  return (
    <ul>
      <ItemFruit />
      {/* {Fruit.map((Fruit, index) => (
        <li key={index}>{Fruit}</li>
      ))} */}
    </ul>
  );
};

export default FruitList;
