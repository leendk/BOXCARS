import React, { useRef, useState } from "react";
import "./AddCarModal.css";
import carSell from "../../../public/background.jpg";
import UploadFile from "../uploadFile/UploadFile";
const AddCarModal = ({ isOpen, onClose }) => {
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [formValues, setFormValues] = useState({
    image: null,
  });
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
            style={{
              backgroundImage: `url(${carSell})`,
            }}
          />
          <h2>Add a New Car</h2>
        </div>

        <form className="car-form">
          <label>Car Name</label>
          <input type="text" placeholder="e.g. Mustang GT" />

          <label>Brand</label>
          <input type="text" placeholder="e.g. Ford" />

          <label>Price ($)</label>
          <input type="number" placeholder="e.g. 30000" />

          <label>Category</label>
          <select>
            <option>Select Category</option>
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
            text={"Car Image"}
            styleBtn={{
              color: "#fff",
            }}
          />

          <label>Description</label>
          <textarea placeholder="Write a brief description..."></textarea>

          <button onClick={onClose} className="submit-btn">
            Submit Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;
