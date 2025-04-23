import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal/Modal";
import AdTypeModal from "../components/adtypemodal/AdTypeModal";
import AddCarModal from "../components/addCarmodal/AddCarModal";

function Navbar({ onSubscriptionClick, onAboutClick, onBrandsClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("login");
  const [showModal, setShowModal] = useState(false);
  const [showModalSell, setShowModalSell] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">BOXCARS</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li onClick={onBrandsClick}>
          <a href="#">Explore cars</a>
        </li>
        <li onClick={setShowModalSell}>
          <a href="#">Sell car</a>
        </li>
        <li style={{ cursor: "pointer" }}>
          <a onClick={() => setShowModal(true)}>Advertisements</a>
        </li>
        <li onClick={onAboutClick}>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="nav-actions">
        <button onClick={() => setIsOpen(true)} className="sign-in">
          <FontAwesomeIcon icon={faUser} /> Sign In
        </button>
        <button onClick={onSubscriptionClick} className="submit-btn">
          Subscription
        </button>
      </div>
      {/* <div className="app-container"> */}
      {/* <button className="open-btn" >
                  Login / Register
                </button> */}
      {isOpen && (
        <Modal step={step} setStep={setStep} onClose={() => setIsOpen(false)} />
      )}
      {/* </div> */}
      {showModal && <AdTypeModal onClose={() => setShowModal(false)} />}

      <AddCarModal
        isOpen={showModalSell}
        onClose={() => setShowModalSell(false)}
      />
    </nav>
  );
}

export default Navbar;
