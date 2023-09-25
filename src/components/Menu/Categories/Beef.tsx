import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuBeef from "../../../data/menuBeef";

const Beef = () => {
  return (
    <div className="category">
      <h2>Beef</h2>
      {menuBeef.beef.map((item) => (
        <MenuItemCard
          key={item.name}
          item={{
            photo: item.photo,
            name: item.name,
            description: item.description,
            allergens: item.allergens,
            price: item.price,
          }}
        />
      ))}
    </div>
  );
};

export default Beef;
