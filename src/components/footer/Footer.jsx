import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import AddCarModal from "../addcarmodal/AddCarModal";
import Modal from "../modal/Modal";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h2>{t("footer.join")}</h2>
          <p>{t("footer.subscribeText")}</p>
        </div>
        <div className="footer-subscribe">
          <input type="email" placeholder={t("footer.newsletterPlaceholder")} />
          <button>{t("footer.send")}</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>{t("footer.columns.company.title")}</h4>
          <ul>
            {t("footer.columns.company.items", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t("footer.columns.quickLinks.title")}</h4>
          <ul>
            {t("footer.columns.quickLinks.items", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t("footer.columns.ourBrands.title")}</h4>
          <ul>
            {t("footer.columns.ourBrands.items", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t("footer.columns.vehicleType.title")}</h4>
          <ul>
            {t("footer.columns.vehicleType.items", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t("footer.columns.mobileApp.title")}</h4>
          <button onClick={() => setShowModal(true)} className="app-btn">
            {t("footer.columns.mobileApp.apple")}
          </button>
          <button className="app-btn">{t("footer.columns.mobileApp.google")}</button>
        </div>

        <div className="footer-column">
          <h4>{t("footer.columns.connect.title")}</h4>
          <div className="social-icons">
            <span><FaInstagram size={26} /></span>
            <span><FaFacebookSquare color="blue" size={26} /></span>
            <span><FaSquareXTwitter size={26} /></span>
            <span><FaWhatsapp color="green" size={26} /></span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.bottom.text")}</p>
        <div className="footer-policy">
          <span>{t("footer.bottom.terms")}</span>
          <span>{t("footer.bottom.privacy")}</span>
        </div>
      </div>

      <AddCarModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </footer>
  );
}

export default Footer;
