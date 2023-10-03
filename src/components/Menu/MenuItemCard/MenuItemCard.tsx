import "./MenuItemCard.scss";
import { useIntl } from "react-intl";

type MenuItemProps = {
  item: {
    id: number;
    photo: string;
    name: string;
    description: string;
    allergens: string[];
    price: number;
  };
};

const MenuItemCard = ({ item }: MenuItemProps) => {
  const intl = useIntl();
  const formattedPrice = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(item.price);
  return (
    <div className="menu-card">
      <div
        className="menu-card__top"
        style={{
          backgroundImage: `url(${item.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="menu-card__top--num">{item.id}</p>
      </div>
      <div className="menu-card__bot">
        <h3 className="menu-card__bot--title"> {intl.formatMessage({ id: `menu.item${item.id}.name` })}</h3>
        <p className="menu-card__bot--price"> {formattedPrice}</p>
        <div className="menu-card__bot--allergen">
          {item.allergens.map((allergen, index) => (
            <p key={index} className="allergen-btn">
              {allergen}
            </p>
          ))}
        </div>
        <p className="menu-card__bot--desc">{intl.formatMessage({ id: `menu.item${item.id}.desc` })}</p>
      </div>
    </div>
  );
};

export default MenuItemCard;
