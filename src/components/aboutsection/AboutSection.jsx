import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutSection.css";

function AboutSection() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      <section
        className="about-section"
        id="about"
        style={{ direction: isArabic ? "rtl" : "ltr", textAlign: isArabic ? "right" : "left" }}
      >
        <div className="about-left">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/PkkV1vLHUvQ"
              title="Car Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="about-right">
          <h1>{t("about.title1")}</h1>
          <h2>{t("about.title2")}</h2>
          <p>{t("about.desc")}</p>
          <ul>
            {t("about.list", { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <a href="#" className="btn">
            {t("about.cta")}
          </a>
        </div>
      </section>

      <div className="stats" style={{ direction: isArabic ? "rtl" : "ltr" }}>
        <div className="stat">
          <h2>{t("stats.values.carsForSale")}</h2>
          <p>{t("stats.carsForSale")}</p>
        </div>
        <div className="stat">
          <h2>{t("stats.values.dealerReviews")}</h2>
          <p>{t("stats.dealerReviews")}</p>
        </div>
        <div className="stat">
          <h2>{t("stats.values.visitorsPerDay")}</h2>
          <p>{t("stats.visitorsPerDay")}</p>
        </div>
        <div className="stat">
          <h2>{t("stats.values.verifiedDealers")}</h2>
          <p>{t("stats.verifiedDealers")}</p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
