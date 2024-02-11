import React from "react";
import Appartement from "./Appartement";
import locations from "../datas/locations.json";

const GalleryGrid = () => {
  return (
    <div className="grid">
      {locations.map((location) => (
        <Appartement key={location.id} location={location} />
      ))}
    </div>
  );
};

export default GalleryGrid;
