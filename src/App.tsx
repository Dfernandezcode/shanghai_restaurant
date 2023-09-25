import "./App.scss";
import { useState } from "react";
import { IntlProvider, useIntl } from "react-intl";
import en from "./translations/en.json";
import id from "./translations/id.json";

interface Messages {
  [key: string]: { [key: string]: string };
}

const messages: Messages = {
  en,
  id,
};

const InnerApp: React.FC = () => {
  const intl = useIntl();

  return <h1>{intl.formatMessage({ id: "hello.world" })}</h1>;
};

const App: React.FC = () => {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="language__toggle">
        <button className="language__toggle--btn" onClick={() => setLocale("en")}>
          English
        </button>
        <button className="language__toggle--btn" onClick={() => setLocale("id")}>
          Bahasa
        </button>
      </div>

      <InnerApp />
    </IntlProvider>
  );
};

export default App;
