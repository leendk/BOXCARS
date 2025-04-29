import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./AddCarModal.css";
import carSell from "../../../public/background.jpg";
import UploadFile from "../uploadFile/UploadFile";

const AddCarModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formValues, setFormValues] = useState({ image: null });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setFormValues((prev) => ({ ...prev, image: file }));
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setFormValues((prev) => ({ ...prev, image: null }));
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay-add-car">
      <div className="modal-content">
        <button className="close-btn-add-car" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <img
            alt="Car"
            className="draweer-img-car"
            style={{ backgroundImage: `url(${carSell})` }}
          />
          <h2>{t("addCarModal.header")}</h2>
        </div>

        <form className="car-form">
          <label>{t("addCarModal.fields.carName")}</label>
          <input type="text" placeholder={t("addCarModal.placeholders.name")} />

          <label>{t("addCarModal.fields.brand")}</label>
          <input type="text" placeholder={t("addCarModal.placeholders.brand")} />

          <label>{t("addCarModal.fields.price")}</label>
          <input type="number" placeholder={t("addCarModal.placeholders.price")} />

          <label>{t("addCarModal.fields.category")}</label>
          <select>
            <option>{t("addCarModal.fields.selectCategory")}</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Hatchback</option>
            <option>Coupe</option>
          </select>

          <UploadFile
            previewUrl={previewUrl}
            uploading={uploading}
            formValues={formValues}
            handleFileChange={handleFileChange}
            fileInputRef={fileInputRef}
            handleRemoveImage={handleRemoveImage}
            text={t("addCarModal.fields.carImage")}
            styleBtn={{ color: "#fff" }}
          />

          <label>{t("addCarModal.fields.description")}</label>
          <textarea placeholder={t("addCarModal.placeholders.description")}></textarea>

          <button onClick={onClose} className="submit-btn">
            {t("addCarModal.submit")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;
