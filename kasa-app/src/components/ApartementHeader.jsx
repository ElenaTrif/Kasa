import React from 'react';

const ApartementHeader = () => {
    return (
        <div className="flat__header">
          <div className="flat__title">
            <h1>Cozy loft, on the Canal Saint-Martin</h1>
            <h2>Paris, Îl-de-France</h2>
            <div className="flat__tags">
              <span>Cozy</span>
              <span>Canal</span>
              <span>Paris 10</span>
            </div>
          </div>
          <div className="flat__owner">
            <div className="flat__owner__host">
              <h3>
                Alexandre <br></br>Dumas
              </h3>
              <div className="flat__owner__host__badge"></div>
            </div>
            <div className="flat__owner__host__stars">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
        </div>
    );
};

export default ApartementHeader;