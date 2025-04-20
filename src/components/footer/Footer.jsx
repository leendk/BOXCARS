import React, { useState } from "react";
import "./Footer.css";
import AddCarModal from "../addCarmodal/AddCarModal";

function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="footer">
      {/* القسم العلوي: الاشتراك بالنشرة */}
      <div className="footer-top">
        <div className="footer-newsletter">
          <h2>Join BoxCar</h2>
          <p>Receive pricing updates, shopping tips & more!</p>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </div>

      {/* القسم الرئيسي: الروابط */}
      <div className="footer-links">
        {/* Company */}
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

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Get in Touch</li>
            <li>Help center</li>
            <li>Live chat</li>
            <li>How it works</li>
          </ul>
        </div>

        {/* Brands */}
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

        {/* Vehicles */}
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

        {/* App Download */}
        <div className="footer-column">
          <h4>Our Mobile App</h4>
          <button onClick={() => setShowModal(true)} className="app-btn">
            Download on the Apple Store
          </button>
          <button className="app-btn">Get it on Google Play</button>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>🐦</span>
            <span>📸</span>
          </div>
        </div>
      </div>

      {/* القسم السفلي */}
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
