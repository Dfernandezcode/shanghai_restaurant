import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuPoultry from "../../../data/menuPoultry";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Categories.scss";

const Poultry: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className="category">
      <button onClick={() => navigate(-1)} className="category__btn--back">
        Back to Menu
      </button>
      <h2 className="category__header">{intl.formatMessage({ id: "menu.category.poultry" })}</h2>
      {menuPoultry.map((item) => (
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

export default Poultry;
