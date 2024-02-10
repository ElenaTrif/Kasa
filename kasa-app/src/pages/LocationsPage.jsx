import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ApartementDescription from "../components/ApartementDescription";
import Carrousel from "../components/Carrousel";

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import locations from "../datas/locations.json";

import filledStar from "../assets/Vector-4.png";
import emptyStar from "../assets/Vector-5.png";

const LocationsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((item) => item.id === id);

  useEffect(() => {
    if (!location) {
      navigate("*");
    }
  }, [id, location, navigate]);

  // Vérifiez si location est défini avant d'accéder à ses propriétés
  if (!location) {
    return null; // Ou affichez un composant d'erreur approprié
  }

  // Extraire les données du fichier JSON
  const { tags, host, rating } = location;

  // Créer les éléments HTML avec les données extraites
  const tagElements = tags.map((tag, index) => <span key={index}>{tag}</span>);
  const starElements = Array.from({ length: 5 }, (_, index) => {
    const starImage = index < rating ? filledStar : emptyStar;
    return <img key={index} src={starImage} alt={`Star ${index}`} />;
  });

  return (
    <div className="aboutPage">
      <Navbar />
      <div className="locationsPage">
        <div className="bannerAbout">
          <Carrousel images={location.pictures} />
        </div>
        <div className="flat__header">
          <div className="flat__title">
            <h1>{location.title}</h1>
            <h2>{location.location}</h2>
            <div className="flat__tags">{tagElements}</div>
          </div>
          <div className="flat__owner">
            <div className="flat__owner__host">
              <h3>{host.name}</h3>
              <div className="flat__owner__host__badge">
                <img src={host.picture} alt="Host Badge" />
              </div>
            </div>
            <div className="flat__owner__host__stars">{starElements}</div>
          </div>
        </div>

        <div className="flat__area">
        <ApartementDescription title="Description" text={location.description} />
        <ApartementDescription title="Equipements" items={location.equipments} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationsPage;
