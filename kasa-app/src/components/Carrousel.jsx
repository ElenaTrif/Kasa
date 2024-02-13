// Carousel.jsx
import React, { useState } from "react";
import arrowLeftImage from "../assets/Vector-7.png";
import arrowRightImage from "../assets/Vector-6.png";

const Carrousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClickPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleClickNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const showNavigation = images.length > 1;

  return (
    <div className="carousel-container">
      <img
        className="carousel-image"
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      {showNavigation && (
        <>
          <div
            className="arrow-carousel arrow-left"
            onClick={handleClickPrevious}
          >
            <img src={arrowLeftImage} alt="Previous" />
          </div>
          <div className="arrow-carousel arrow-right" onClick={handleClickNext}>
            <img src={arrowRightImage} alt="Next" />
          </div>
        </>
      )}
      {showNavigation && (
        <div className="counter-wrapper">
          <div className="counter">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
