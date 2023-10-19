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
    <div className="home-menu">
      <ul className="home-menu__wrapper">
        <li className="home-menu__link">
          <Link to="/menu">{intl.formatMessage({ id: "nav.menu" })}</Link>
        </li>
        <li className="home-menu__link">
          <Link to="/about">{intl.formatMessage({ id: "nav.about" })}</Link>
        </li>
        <li className="home-menu__link">
          <Link to="/contact">{intl.formatMessage({ id: "nav.contact" })}</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeMenu;
