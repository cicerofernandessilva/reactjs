import ItemFruit from "./ItemFruit";

const FruitListTwo = ({ fruit }) => {
  return (
    <ul>
      {fruit.map((fruit, index) => (
        <ItemFruit key={index} fruit={fruit} />
      ))}
    </ul>
  );
};

export default FruitListTwo;
