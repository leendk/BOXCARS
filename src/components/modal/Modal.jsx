// src/components/modal/Modal.js
import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";
import UploadFile from "../uploadFile/UploadFile";

const API_BASE = "http://127.0.0.1:8000/api";

export default function Modal({ step, setStep, onClose }) {
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
          console.error("Login failed:", data);
          alert(data.message || "Login failed.");
        }
      } catch (error) {
        console.error("Login error:", error);
        alert("Something went wrong during login.");
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
        console.error("Registration failed:", data);
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Something went wrong while registering.");
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
              {tabKey === "register" ? "Subscribe" : "Login"}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          {(step === "login" || step === "register") && (
            <>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                required
              />
              <label>Password</label>
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
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                required
              />
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                // pattern="\\d+"
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
              <label>City</label>
              <input
                type="text"
                name="city"
                value={formValues.city}
                onChange={handleChange}
                required
              />
              <label>Country</label>
              <input
                type="text"
                name="country"
                value={formValues.country}
                onChange={handleChange}
                required
              />
              <label>Role</label>
              <select
                name="role"
                value={formValues.role}
                onChange={handleChange}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
            </>
          )}
          <button type="submit" className="submit-btn">
            {step === "login" ? "Login" : "Subscribe"}
          </button>
        </form>
      </div>
    </>
  );
}
