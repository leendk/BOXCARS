// AdTypeModal.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./AdTypeModal.css";
import {
  FaCar,
  FaHome,
  FaMobileAlt,
  FaEllipsisH,
  FaTimes,
} from "react-icons/fa";
import UploadFile from "../uploadFile/UploadFile";

const AdTypeModal = ({ onClose }) => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState(null);

  const handleSelect = (type) => {
    if (type !== "car") return;
    setSelectedType(type);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="modal-title">{t("adTypeModal.title")}</h2>

        <div className="ad-type-options">
          <div
            style={{ cursor: "pointer" }}
            className={`ad-option ${selectedType === "car" ? "active" : ""}`}
            onClick={() => handleSelect("car")}
          >
            <span>{t("adTypeModal.options.car")}</span>
            <FaCar />
          </div>

          {selectedType === "car" ? (
            <UploadFile text={t("addCarModal.fields.carImage")} />
          ) : (
            <>
              <div style={{ cursor: "not-allowed" }} className="ad-option">
                <span>{t("adTypeModal.options.realEstate")}</span>
                <FaHome />
              </div>

              <div style={{ cursor: "not-allowed" }} className="ad-option">
                <span>{t("adTypeModal.options.device")}</span>
                <FaMobileAlt />
              </div>

              <div style={{ cursor: "not-allowed" }} className="ad-option">
                <span>{t("adTypeModal.options.services")}</span>
                <FaEllipsisH />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdTypeModal;
