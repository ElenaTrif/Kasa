import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ApartementBanner from "./ApartementBanner";
import ApartementDescription from "./ApartementDescription";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Navbar />
      <ApartementBanner />
      <div className="aboutDescription">
      <ApartementDescription />
      <ApartementDescription />
      <ApartementDescription />
      <ApartementDescription />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
