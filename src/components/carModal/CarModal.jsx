import React from "react";
import "./CarModal.css";
import imgCar from "../../../public/background.jpg";
const CarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-modern" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>

        {/* صورة السيارة */}
        <div
          className="modal-image"
          style={{
            backgroundImage: `url(${imgCar})`,
          }}
        />

        {/* معلومات السيارة */}
        <div className="modal-content">
          <h2 className="car-title">Range Rover Velar</h2>

          <div className="info-grid">
            <div className="info-box">
              <span className="label">المالك</span>
              <span className="value">محمد الأحمد</span>
            </div>

            <div className="info-box">
              <span className="label">السعر</span>
              <span className="value">$98,000</span>
            </div>

            <div className="info-box">
              <span className="label">الماركة</span>
              <span className="value">Land Rover</span>
            </div>

            <div className="info-box">
              <span className="label">الفئة</span>
              <span className="value">SUV</span>
            </div>

            <div className="info-box">
              <span className="label">نوع الوقود</span>
              <span className="value">ديزل</span>
            </div>

            <div className="info-box">
              <span className="label">ناقل الحركة</span>
              <span className="value">أوتوماتيك</span>
            </div>

            <div className="info-box">
              <span className="label">عدد الكيلومترات</span>
              <span className="value">30,000 كم</span>
            </div>

            <div className="info-box">
              <span className="label">اللون</span>
              <span className="value">أسود</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
