import React from "react";
import LanguageToggle from "../LanguageToggle/LanguageToggle";

interface FooterProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentLocale, onLocaleChange }) => {
  return (
    <footer className="footer">
      <LanguageToggle currentLocale={currentLocale} onLocaleChange={onLocaleChange} />
    </footer>
  );
};

export default Footer;
