/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "../Navbar/Navbar";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Nav currentLocale={""} onLocaleChange={(_locale: string): void => {}} />
      <h1 className="contact__header">Contact</h1>
      <div>
        <h2>For Reservations and orders:</h2>
        <p>Call (542) 422 951</p>
        <p>or email us at: shanghaibpn@gmail.com</p>
      </div>

      <div>
        <h3>Address</h3>
        <p>Jalan Jenderal Sudirman No.19 RT.36/RW.10</p>
        <p>Klandasan Ilir</p>
        <p>Balikpapan Kota</p>
        <p>Kota Balikpapan</p>
        <p>Kalimantan Timur 76114 | Indonesia</p>
      </div>
    </div>
  );
};

export default Contact;
