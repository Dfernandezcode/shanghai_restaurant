import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import { IntlProvider } from "react-intl";
import en from "./translations/en.json";
import id from "./translations/id.json";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Fish from "./components/Menu/Categories/Fish";
import Beef from "./components/Menu/Categories/Beef";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Poultry from "./components/Menu/Categories/Poultry";
import Footer from "./components/Footer/Footer";

interface Messages {
  [key: string]: { [key: string]: string };
}

const messages: Messages = {
  en,
  id,
};

const App: React.FC = () => {
  const [currentLocale, setCurrentLocale] = useState("en");

  const handleLocaleChange = (locale: string) => {
    setCurrentLocale(locale);
  };

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      <main className="main">
        <div className="routers">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/fish" element={<Fish />} />
              <Route path="/menu/poultry" element={<Poultry />} />
              <Route path="/menu/beef" element={<Beef />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contact" element={<Gallery />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer currentLocale={currentLocale} onLocaleChange={handleLocaleChange} />
      </main>
    </IntlProvider>
  );
};

export default App;
