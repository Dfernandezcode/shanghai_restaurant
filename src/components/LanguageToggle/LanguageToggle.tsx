import React from "react";
import "./LanguageToggle.scss";

interface Props {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

const LanguageToggle: React.FC<Props> = ({ currentLocale, onLocaleChange }) => {
  return (
    <div className="language__toggle">
      <button className="language__toggle--btn" onClick={() => onLocaleChange("en")} disabled={currentLocale === "en"}>
        <img src="src\assets\images\language\united-kingdom-flag-icon.svg" />
      </button>
      <button className="language__toggle--btn" onClick={() => onLocaleChange("id")} disabled={currentLocale === "id"}>
        <img src="src\assets\images\language\indonesia-flag-icon.svg" />
      </button>
    </div>
  );
};

export default LanguageToggle;
