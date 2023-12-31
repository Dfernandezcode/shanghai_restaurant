import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuBeef from "../../../data/menuBeef";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

const Beef = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className="category">
      <button onClick={() => navigate(-1)} className="category__back-btn">
        Back to Menu
      </button>
      <h2>{intl.formatMessage({ id: "menu.category.beef" })}</h2>
      {menuBeef.map((item) => (
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

export default Beef;
