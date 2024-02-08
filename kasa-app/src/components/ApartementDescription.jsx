import React, { useState } from "react";
import Vector from "../assets/Vector-3.png";

const ApartementDescription = ({ title, text, items }) => {
  const [isOpen, setIsOpen] = useState(false); // State pour suivre si le Collapse est ouvert ou fermé

  const handleToggleCollapse = () => {
    setIsOpen(!isOpen); // Inverser l'état du Collapse lors du clic
  };

  return (
    <div className="flat__description">
      <div
        className={`description__title ${isOpen ? "open" : ""}`}
        onClick={handleToggleCollapse}
      >
        <span>{title}</span>
        <span>
          <img className="vectorUp" src={Vector} alt="flèche en haut" />
        </span>
      </div>
      {isOpen && (
        <div className="description__text">
          {text && <p>{text}</p>}
          {items && (
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ApartementDescription;
