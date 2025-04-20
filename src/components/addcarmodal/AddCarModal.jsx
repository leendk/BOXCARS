import React from "react";
import "./AddCarModal.css";

const AddCarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <img src="/car-placeholder.png" alt="Car" className="modal-image" />
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

          <label>Description</label>
          <textarea placeholder="Write a brief description..."></textarea>

          <button type="submit" className="submit-btn">
            Submit Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;
