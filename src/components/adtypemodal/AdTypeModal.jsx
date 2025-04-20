// AdTypeModal.jsx
import React, { useState } from "react";
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

        <h2 className="modal-title">Choose Ad Type</h2>

        <div className="ad-type-options">
          <div
            style={{ cursor: "pointer" }}
            className={`ad-option ${selectedType === "car" ? "active" : ""}`}
            onClick={() => handleSelect("car")}
          >
            <span>Post a Car for Sale or Rent</span>
            <FaCar />
          </div>

          {selectedType === "car" ? (
            <UploadFile
              text={"Car Image"}
              //   previewUrl={previewUrl}
              //   uploading={uploading}
              //   formValues={formValues}
              //   handleFileChange={handleFileChange}
              //   fileInputRef={fileInputRef}
              //   handleRemoveImage={handleRemoveImage}
            />
          ) : (
            <>
              <div style={{ cursor: "not-allowed" }} className="ad-option">
                <span>Post Real Estate (Coming Soon)</span>
                <FaHome />
              </div>

              <div style={{ cursor: "not-allowed" }} className="ad-option">
                <span>Post a Device (Coming Soon)</span>
                <FaMobileAlt />
              </div>

              <div style={{ cursor: "not-allowed" }} className="ad-option">
                <span>Post Product or Services (Coming Soon)</span>
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
