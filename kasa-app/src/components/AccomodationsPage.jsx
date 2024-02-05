import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ApartementDescription from "./ApartementDescription";
import ApartementBanner from "./ApartementBanner";
import ApartementHeader from "./ApartementHeader";

const AccomodationsPage = () => {
  return (
    <div class="aboutPage">
      <Navbar />
      <div className="accomodationsPage">
        <ApartementBanner />
        <ApartementHeader />
        <div className="flat__area">
          <ApartementDescription />
          <ApartementDescription />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccomodationsPage;
