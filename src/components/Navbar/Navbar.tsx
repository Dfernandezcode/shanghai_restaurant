import { Link, useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Navbar.scss";

interface NavProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

const Nav: React.FC<NavProps> = () => {
  const intl = useIntl();
  const location = useLocation();

  const isCurrentPath = (path: string) => location.pathname === path;

  return (
    <div className="navbar">
      <ul className="navbar__wrapper">
        <li>
          <Link className={`navbar__link ${isCurrentPath("/") ? "navbar__link--active" : ""}`} to="/">
            {intl.formatMessage({ id: "nav.home" })}
          </Link>
        </li>
        <li>
          <Link className={`navbar__link ${isCurrentPath("/menu") ? "navbar__link--active" : ""}`} to="/menu">
            {intl.formatMessage({ id: "nav.menu" })}
          </Link>
        </li>
        <li>
          <Link className={`navbar__link ${isCurrentPath("/about") ? "navbar__link--active" : ""}`} to="/about">
            {intl.formatMessage({ id: "nav.about" })}
          </Link>
        </li>
        <li>
          <Link className={`navbar__link ${isCurrentPath("/contact") ? "navbar__link--active" : ""}`} to="/contact">
            {intl.formatMessage({ id: "nav.contact" })}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
