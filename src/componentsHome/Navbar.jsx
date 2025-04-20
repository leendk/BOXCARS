import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/modal/Modal";
import AdTypeModal from "../components/adtypemodal/AdTypeModal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState("login");
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">BOXCARS</div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </button>
      <ul className={`menu ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Listings</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a onClick={() => setShowModal(true)}>Advertisements</a>
        </li>
        <li>
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
        <button className="submit-btn">Submit Listing</button>
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
    </nav>
  );
}

export default Navbar;
