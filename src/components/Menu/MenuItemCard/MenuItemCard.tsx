type MenuItemProps = {
  item: {
    photo: string;
    name: string;
    description: string;
    allergens: string[];
    price: number;
  };
};

const MenuItemCard = ({ item }: MenuItemProps) => {
  return (
    <div className="menu-item-card">
      <img src={item.photo} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Allergens: {item.allergens.join(", ")}</p>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default MenuItemCard;
