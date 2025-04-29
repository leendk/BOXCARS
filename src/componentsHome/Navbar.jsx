import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Modal from "../components/modal/Modal";
import AdTypeModal from "../components/adtypemodal/AdTypeModal";
import AddCarModal from "../components/addcarmodal/AddCarModal";

function Navbar({ onSubscriptionClick, onAboutClick, onBrandsClick }) {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("login");
  const [showModal, setShowModal] = useState(false);
  const [showModalSell, setShowModalSell] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="navbar">
      <div className="logo">BOXCARS</div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>

      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li onClick={onBrandsClick}>
          <a href="#">{t("navbar.exploreCars")}</a>
        </li>
        <li onClick={() => setShowModalSell(true)}>
          <a href="#">{t("navbar.sellCar")}</a>
        </li>
        <li>
          <a onClick={() => setShowModal(true)} style={{ cursor: "pointer" }}>
            {t("navbar.advertisements")}
          </a>
        </li>
        <li onClick={onAboutClick}>
          <a href="#">{t("navbar.about")}</a>
        </li>
        <li>
          <a href="#">{t("navbar.contact")}</a>
        </li>
      </ul>

      <div className="nav-actions">
        <button onClick={() => setIsOpen(true)} className="sign-in">
          <FontAwesomeIcon icon={faUser} /> {t("navbar.signIn")}
        </button>
        <button
          onClick={onSubscriptionClick}
          className="submit-btn"
          style={{ marginTop: "0px" }}
        >
          {t("navbar.subscription")}
        </button>

        <button
          onClick={toggleLanguage}
          className="lang-btn"
          title={
            i18n.language === "en" ? "Switch to Arabic" : "Switch to English"
          }
        >
          <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
          <span className="lang-text">
            {i18n.language === "en" ? "عربي" : "EN"}
          </span>
        </button>
      </div>

      {isOpen && (
        <Modal step={step} setStep={setStep} onClose={() => setIsOpen(false)} />
      )}
      {showModal && <AdTypeModal onClose={() => setShowModal(false)} />}
      <AddCarModal
        isOpen={showModalSell}
        onClose={() => setShowModalSell(false)}
      />
    </nav>
  );
}

export default Navbar;
