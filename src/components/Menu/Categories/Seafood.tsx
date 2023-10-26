import MenuItemCard from "../MenuItemCard/MenuItemCard";
import menuSeafood from "../../../data/menuSeafood";
import { useNavigate } from "react-router-dom";
import { useIntl } from "react-intl";

const Seafood: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();

  return (
    <div className="category">
      <button onClick={() => navigate(-1)}>Back to Menu</button>
      <h2>{intl.formatMessage({ id: "menu.category.seafood" })}</h2>
      {menuSeafood.map((item) => (
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

export default Seafood;
