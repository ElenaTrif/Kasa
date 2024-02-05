import React from 'react';
import Vector from "../assets/Vector-3.png";

const ApartementDescription = () => {
    return (
        <div className="flat__area">
          <div className="flat__description">
            <p className="description__title">
              <span>Description</span>
              <span>
                <img className="vectorUp" src={Vector} alt="flèche en haut" />
              </span>
            </p>
            <p className="description__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio rem itaque deleniti ex, quisquam maxime recusandae,
              doloremque illo atque totam soluta perferendis ea animi minima
              dicta ipsum cumque at laboriosam?
            </p>
          </div>
        </div>
    );
};

export default ApartementDescription;