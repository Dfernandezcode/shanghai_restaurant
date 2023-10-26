/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Menu.scss";
import seafoodImage from "../../assets/images/covers/seafood-category.jpg";
import poultryImage from "../../assets/images/covers/chicken-category.jpg";
import beefImage from "../../assets/images/covers/beef-category.jpg";
import Nav from "../Navbar/Navbar";
const Menu = () => {
  const intl = useIntl();

  const categoryImages = {
    seafood: seafoodImage,
    poultry: poultryImage,
    beef: beefImage,
  };

  return (
    <div className="menu">
      <Nav currentLocale={""} onLocaleChange={(_locale: string): void => {}} />
      <h1 className="menu__header">{intl.formatMessage({ id: "menu.title" })}</h1>
      <div className="menu__grid">
        {["seafood", "poultry", "beef"].map((category) => (
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
