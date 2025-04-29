import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Modal.css";
import UploadFile from "../uploadFile/UploadFile";

const API_BASE = "http://127.0.0.1:8000/api";

export default function Modal({ step, setStep, onClose }) {
  const { t } = useTranslation();

  const fileInputRef = useRef(null);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    fullName: "",
    phone: "",
    city: "",
    country: "",
    role: "buyer",
    image: null,
  });

  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === "login") {
      try {
        const res = await fetch(`${API_BASE}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: formValues.email,
            password: formValues.password,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          console.log("Login successful:", data);
          onClose();
        } else {
          alert(data.message || t("modal.error.loginFail"));
        }
      } catch (error) {
        alert(t("modal.error.loginError"));
      }
      return;
    }

    const formData = new FormData();
    formData.append("name", formValues.fullName);
    formData.append("email", formValues.email);
    formData.append("password", formValues.password);
    formData.append("phone", formValues.phone);
    formData.append("city", formValues.city);
    formData.append("country", formValues.country);
    formData.append("role", formValues.role);
    if (formValues.image) {
      formData.append("profile_picture", formValues.image);
    }

    try {
      const res = await fetch(`${API_BASE}/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Registration successful:", data);
        onClose();
      } else {
        alert(data.message || t("modal.error.registerFail"));
      }
    } catch (error) {
      alert(t("modal.error.registerError"));
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="tabs">
          {["register", "login"].map((tabKey) => (
            <div
              key={tabKey}
              className={step === tabKey ? "tab active" : "tab"}
              onClick={() => setStep(tabKey)}
            >
              {t(`modal.tabs.${tabKey}`)}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {(step === "login" || step === "register") && (
            <>
              <label>{t("modal.fields.email")}</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <label>{t("modal.fields.password")}</label>
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                required
                minLength={6}
              />
            </>
          )}
          {step === "register" && (
            <>
              <label>{t("modal.fields.fullName")}</label>
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                required
              />
              <label>{t("modal.fields.phone")}</label>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                required
              />
              <UploadFile
                previewUrl={previewUrl}
                uploading={uploading}
                formValues={formValues}
                handleFileChange={handleFileChange}
                fileInputRef={fileInputRef}
                handleRemoveImage={handleRemoveImage}
              />
              <label>{t("modal.fields.city")}</label>
              <input
                type="text"
                name="city"
                value={formValues.city}
                onChange={handleChange}
                required
              />
              <label>{t("modal.fields.country")}</label>
              <input
                type="text"
                name="country"
                value={formValues.country}
                onChange={handleChange}
                required
              />
              <label>{t("modal.fields.role")}</label>
              <select
                name="role"
                value={formValues.role}
                onChange={handleChange}
              >
                <option value="buyer">{t("modal.roles.buyer")}</option>
                <option value="seller">{t("modal.roles.seller")}</option>
              </select>
            </>
          )}
          <div className="submit-btn-parent">
            <button type="submit" className="submit-btn marginCustom">
              {step === "login"
                ? t("modal.submit.login")
                : t("modal.submit.register")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
