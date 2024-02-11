import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BannerAbout from "../components/BannerAbout";
import ApartementDescription from "../components/ApartementDescription";

const AboutPage = () => {
  return (
    <div className="aboutPage">
      <Navbar />
      <div className="aboutContenue">
        <BannerAbout />
        <div className="aboutDescription">
          <ApartementDescription
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale. 
      Les photos sont conformes aux logements, et toutes les informations 
      sont régulièrement vérifiées par nos équipes."
          />
          <ApartementDescription
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa. 
      Tout comportement discriminatoire ou de perturbation du voisinage
      entraînera une exclusion de note plateforme."
          />
          <ApartementDescription
            title="Service"
            text="Nos équipes se tiennent à votre disposition pour vous fournir une 
      expérience parfaite. N'hésitez pas à nous contacter si vous avez 
      la moindre question."
          />
          <ApartementDescription
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que 
      pour les voyageurs, chaque logement correspond aux critères de sécurité
      établis par nos services. En laissant une note aussi bien à l'hôte qu'au
      locataire, cela permet à nos équipes de vérifier que les standards sont 
      bien respectés. Nous organisons également des ateliers sur la sécurité 
      domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
