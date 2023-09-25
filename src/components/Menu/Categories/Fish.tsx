import MenuItemCard from "../MenuItemCard/MenuItemCard";
import { menuFish } from "../../../data/menuFish";

const Fish = () => {
  return (
    <div className="category">
      <h2>Fish</h2>
      {menuFish.fish.map((item) => (
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

export default Fish;
