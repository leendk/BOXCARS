import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCarSide,
  faCar,
  faCarRear,
  faCarBurst,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="container">
      <div className="hero-content">
        <p className="subtitle">Find cars for sale and for rent near you</p>
        <h1 className="title">Find Your Perfect Car</h1>
        <div className="tabs">
          <span>All</span>
          <span>New</span>
          <span>Used</span>
        </div>
        <div className="search-form">
          <select className="dropdown">
            <option>Any Makes</option>
          </select>
          <select className="dropdown">
            <option>Any Models</option>
          </select>
          <select className="dropdown">
            <option>Prices: All Prices</option>
          </select>
          <button
            className="search-button"
            onClick={() => alert("Searching for cars...")}
          >
            <FontAwesomeIcon icon={faSearch} /> Search Cars
          </button>
        </div>
        <p className="browse-text">Or Browse Featured Models</p>
        <div className="icons">
          <div className="icon-button">
            <FontAwesomeIcon icon={faCarSide} /> SUV
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faCar} /> Sedan
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faCarRear} /> Hatchback
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faCarBurst} /> Coupe
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faBolt} /> Hybrid
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
