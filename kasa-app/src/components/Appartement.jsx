import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Appartement = ({ location }) => {
  return (
    <Link to={`/location/${location.id}`}>
      <div className="appartement">
        <div className="thumb">
          <img src={location.cover} alt={`flat ${location.title}`} />
        </div>
        <h2 className="titleAppartement">{location.title}</h2>
      </div>
    </Link>
  );
};

Appartement.propTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }).isRequired,
};

export default Appartement;
