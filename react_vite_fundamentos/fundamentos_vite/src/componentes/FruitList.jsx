import ItemFruit from "./ItemFruit";

const FruitList = ({ fruit }) => {
  return (
    <ul>
      {fruit.map((fruit, index) => (
        <ItemFruit key={index} fruit={fruit} />
      ))}
    </ul>
  );
};

export default FruitList;
