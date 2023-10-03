/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "../Navbar/Navbar";

const About = () => {
  return (
    <div className="About">
      <Nav currentLocale={""} onLocaleChange={(_locale: string): void => {}} />
      <h1>Our About</h1>
    </div>
  );
};

export default About;
