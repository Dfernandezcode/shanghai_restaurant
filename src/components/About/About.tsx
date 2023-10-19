/* eslint-disable @typescript-eslint/no-unused-vars */
import Nav from "../Navbar/Navbar";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <Nav currentLocale={""} onLocaleChange={(_locale: string): void => {}} />
      <h1 className="about__heading">Our History</h1>
      <p className="about__text">
        Established in 1971, "Shanghai" stands as Balikpapan's oldest traditional Chinese restaurant, offering a rich culinary journey into authentic flavors of the Far East. For over five decades, we have been a haven for food enthusiasts, delivering meticulously crafted dishes using time-honored recipes and the freshest ingredients. Our elegant and nostalgic ambiance provides a gateway to the vibrant, aromatic world of Chinese cuisine. At "Shanghai," every meal is not just a dining experience but a celebration of Chinese culture and gastronomy, right in the heart of Balikpapan.
      </p>
    </div>
  );
};

export default About;
