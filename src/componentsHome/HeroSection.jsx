import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="hero-content">
        <p className="subtitle">{t("hero.subtitle")}</p>
        <h1 className="title">{t("hero.title")}</h1>

        <div className="tabs">
          <span>{t("hero.tabs.all")}</span>
          <span>{t("hero.tabs.new")}</span>
          <span>{t("hero.tabs.used")}</span>
        </div>

        <div className="search-form">
          <select className="dropdown">
            <option>{t("hero.filters.anyMakes")}</option>
          </select>
          <select className="dropdown">
            <option>{t("hero.filters.anyModels")}</option>
          </select>
          <select className="dropdown">
            <option>{t("hero.filters.allPrices")}</option>
          </select>

          <button
            className="search-button"
            onClick={() => alert(t("hero.searchCars"))}
          >
            <FontAwesomeIcon icon={faSearch} /> {t("hero.searchCars")}
          </button>
        </div>

        <p className="browse-text">{t("hero.browseFeatured")}</p>

        <div className="icons">
          <div className="icon-button">
            <FontAwesomeIcon icon={faCarSide} /> {t("hero.icons.suv")}
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faCar} /> {t("hero.icons.sedan")}
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faCarRear} /> {t("hero.icons.hatchback")}
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faCarBurst} /> {t("hero.icons.coupe")}
          </div>
          <div className="icon-button">
            <FontAwesomeIcon icon={faBolt} /> {t("hero.icons.hybrid")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
