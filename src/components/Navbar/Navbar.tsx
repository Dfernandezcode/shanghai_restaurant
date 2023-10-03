import { Link } from "react-router-dom";
import { useIntl } from "react-intl";
import "./Navbar.scss";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

interface NavProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

const Nav: React.FC<NavProps> = ({ currentLocale, onLocaleChange }) => {
  const intl = useIntl();

  return (
    <div className="navbar">
      <ul className="navbar__wrapper">
        <li>
          <Link to="/">{intl.formatMessage({ id: "nav.home" })}</Link>
        </li>
        <li>
          <Link to="/about">{intl.formatMessage({ id: "nav.about" })}</Link>
        </li>
        <li>
          <Link to="/menu">{intl.formatMessage({ id: "nav.menu" })}</Link>
        </li>
        <li>
          <Link to="/contact">{intl.formatMessage({ id: "nav.contact" })}</Link>
        </li>
      </ul>
      <LanguageToggle currentLocale={currentLocale} onLocaleChange={onLocaleChange} />
    </div>
  );
};

export default Nav;
