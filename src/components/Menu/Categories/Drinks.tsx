import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuDrinks from "../../../data/menuDrinks";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Categories.scss";

const Drinks: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className="category">
      <button onClick={() => navigate(-1)} className="category__btn--back">
        Back to Menu
      </button>
      <h2 className="category__header">{intl.formatMessage({ id: "menu.category.drinks" })}</h2>
      {menuDrinks.map((item) => (
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

export default Drinks;
