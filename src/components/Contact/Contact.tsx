/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="Contact">
      <Nav currentLocale={""} onLocaleChange={(_locale: string): void => {}} />
      <h1>Contact</h1>
      <div>
        <h2>For Reservations:</h2>
        <p>Call 422 951</p>
        <p>or email us at: shanghaibpn@gmail.com</p>
      </div>
    </div>
  );
};

export default Contact;
