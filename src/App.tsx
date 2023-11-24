import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { IntlProvider } from "react-intl";
import Menu from "./components/Menu/Menu";
import en from "./translations/en.json";
import id from "./translations/id.json";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Seafood from "./components/Menu/Categories/Seafood";
import Beef from "./components/Menu/Categories/Beef";
import Home from "./components/Home/Home";
import Poultry from "./components/Menu/Categories/Poultry";
import Footer from "./components/Footer/Footer";
import Drinks from "./components/Menu/Categories/Drinks";

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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="main">
        <div className="routers">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/drinks" element={<Drinks />} />
              <Route path="/menu/seafood" element={<Seafood />} />
              <Route path="/menu/poultry" element={<Poultry />} />
              <Route path="/menu/beef" element={<Beef />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer currentLocale={currentLocale} onLocaleChange={handleLocaleChange} />
      </motion.div>
    </IntlProvider>
  );
};

export default App;
