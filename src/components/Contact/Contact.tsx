/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="Contact">
      <Nav currentLocale={""} onLocaleChange={(_locale: string): void => {}} />
      <h1>Our Contact</h1>
    </div>
  );
};

export default Contact;
