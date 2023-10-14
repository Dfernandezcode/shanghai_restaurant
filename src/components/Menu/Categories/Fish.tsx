import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuFish from "../../../data/menuFish";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

const Fish: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className="category">
      <button onClick={() => navigate(-1)}>Back to Menu</button>
      <h2>{intl.formatMessage({ id: "menu.category.fish" })}</h2>
      {menuFish.map((item) => (
        <MenuItemCard
          key={item.name}
          item={{
            id: item.id,
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
