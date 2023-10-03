import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Menu.scss";
import fishImage from "../../assets/images/covers/fish-category.jpg";
import poultryImage from "../../assets/images/covers/chicken-category.jpg";
import beefImage from "../../assets/images/covers/beef-category.jpg";
const Menu = () => {
  const intl = useIntl();

  const categoryImages = {
    fish: fishImage,
    poultry: poultryImage,
    beef: beefImage,
  };

  return (
    <div className="menu">
      <h1 className="menu__header">{intl.formatMessage({ id: "menu.title" })}</h1>
      <div className="menu__grid">
        {["fish", "poultry", "beef"].map((category) => (
          <Link
            key={category}
            className="grid-card"
            to={`/menu/${category}`}
            style={{
              backgroundImage: `url(${categoryImages[category as keyof typeof categoryImages]})`,
            }}
          >
            <p className="grid-card__text">{intl.formatMessage({ id: `menu.category.${category}` })}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
