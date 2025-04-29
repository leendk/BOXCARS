import React from "react";
import { useTranslation } from "react-i18next";
import "./CarModal.css";
import imgCar from "../../../public/background.jpg";

const CarModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-modern" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✘
        </button>

        <div
          className="modal-image-car"
          style={{
            backgroundImage: `url(${imgCar})`,
          }}
        />

        <div className="modal-content">
          <h2 className="car-title">Range Rover Velar</h2>

          <div className="info-grid">
            <div className="info-box">
              <span className="label">{t("carModal.fields.owner")}</span>
              <span className="value">محمد الأحمد</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.price")}</span>
              <span className="value">$98,000</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.brand")}</span>
              <span className="value">Land Rover</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.category")}</span>
              <span className="value">SUV</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.fuelType")}</span>
              <span className="value">ديزل</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.transmission")}</span>
              <span className="value">أوتوماتيك</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.mileage")}</span>
              <span className="value">30,000 كم</span>
            </div>

            <div className="info-box">
              <span className="label">{t("carModal.fields.color")}</span>
              <span className="value">أسود</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
