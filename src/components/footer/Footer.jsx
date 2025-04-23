import React, { useState } from "react";
import "./Footer.css";
import AddCarModal from "../addCarmodal/AddCarModal";
import Modal from "../modal/Modal";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h2>Join BoxCar</h2>
          <p>Receive pricing updates, shopping tips & more!</p>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="Your email address" />
          <button>send</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Services</li>
            <li>FAQs</li>
            <li>Terms</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Get in Touch</li>
            <li>Help center</li>
            <li>Live chat</li>
            <li>How it works</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Brands</h4>
          <ul>
            <li>Toyota</li>
            <li>Porsche</li>
            <li>Audi</li>
            <li>BMW</li>
            <li>Ford</li>
            <li>Nissan</li>
            <li>Peugeot</li>
            <li>Volkswagen</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Vehicles Type</h4>
          <ul>
            <li>Sedan</li>
            <li>Hatchback</li>
            <li>SUV</li>
            <li>Hybrid</li>
            <li>Electric</li>
            <li>Coupe</li>
            <li>Truck</li>
            <li>Convertible</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Our Mobile App</h4>
          <button onClick={() => setShowModal(true)} className="app-btn">
            Download on the Apple Store
          </button>
          <button className="app-btn">Get it on Google Play</button>
        </div>

        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <span>
              <FaInstagram size={26} />
            </span>
            <span>
              <FaFacebookSquare color="blue" size={26} />
            </span>
            <span>
              <FaSquareXTwitter size={26} />
            </span>
            <span>
              <FaWhatsapp color="green" size={26} />
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 exemple.com. All rights reserved.</p>
        <div className="footer-policy">
          <span>Terms & Conditions</span>
          <span>Privacy Notice</span>
        </div>
      </div>
      <AddCarModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </footer>
  );
}

export default Footer;
