import { useState } from "react";
import HomeMenu from "../HomeMenu/HomeMenu";
import { useIntl } from "react-intl";
import "./Home.scss";

const Home = () => {
  const [locale, setLocale] = useState("en");
  const intl = useIntl();
  return (
    <div className="home">
      <div className="home__title-wrapper">
        <h2 className="home__subtitle">Restoran</h2>
        <h1 className="home__title">Shanghai</h1>
      </div>

      <div className="home__menu-wrapper">
        <HomeMenu currentLocale={locale} onLocaleChange={setLocale} />
      </div>
      <div className="home__hours">
        <h2 className="home__subtitle">{intl.formatMessage({ id: "home.opening.hours" })}</h2>
        <p className="home__time">10:00 - 22:00 everyday</p>
      </div>
    </div>
  );
};

export default Home;
