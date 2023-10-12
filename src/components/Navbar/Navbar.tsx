import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Navbar.scss";
interface NavProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

const Nav: React.FC<NavProps> = () => {
  const intl = useIntl();

  return (
    <div className="navbar">
      <ul className="navbar__wrapper">
        <li>
          <Link className="navbar__link" to="/">
            {intl.formatMessage({ id: "nav.home" })}
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/about">
            {intl.formatMessage({ id: "nav.about" })}
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/menu">
            {intl.formatMessage({ id: "nav.menu" })}
          </Link>
        </li>
        <li>
          <Link className="navbar__link" to="/contact">
            {intl.formatMessage({ id: "nav.contact" })}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
