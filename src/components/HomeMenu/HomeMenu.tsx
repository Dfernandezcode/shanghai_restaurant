import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./HomeMenu.scss";

interface NavProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

const HomeMenu: React.FC<NavProps> = () => {
  const intl = useIntl();

  return (
    <div className="menu">
      <ul className="menu__wrapper">
        <li className="menu__link">
          <Link to="/about">{intl.formatMessage({ id: "nav.about" })}</Link>
        </li>
        <li className="menu__link">
          <Link to="/menu">{intl.formatMessage({ id: "nav.menu" })}</Link>
        </li>
        <li className="menu__link">
          <Link to="/contact">{intl.formatMessage({ id: "nav.contact" })}</Link>
        </li>
        <li className="menu__link">
          <Link to="/gallery">{intl.formatMessage({ id: "nav.gallery" })}</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenu;
