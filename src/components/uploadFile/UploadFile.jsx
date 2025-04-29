import React from "react";
import { useTranslation } from "react-i18next";

function UploadFile({
  previewUrl,
  uploading,
  formValues,
  handleFileChange,
  fileInputRef,
  handleRemoveImage,
  text,
  styleBtn,
}) {
  const { t } = useTranslation();

  return (
    <>
      <label>{text || t("uploadFile.profileImage")}</label>
      <div className="upload-container">
        {!previewUrl ? (
          <>
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <label
              htmlFor="fileInput"
              className={uploading ? "upload-btn loading" : "upload-btn"}
            >
              {uploading && <div className="spinner" />}
              <span>
                {uploading
                  ? t("uploadFile.loading")
                  : t("uploadFile.chooseImage")}
              </span>
            </label>
          </>
        ) : (
          <div className="img-preview">
            <img src={previewUrl} alt="Preview" />
            <span>{formValues.image && formValues.image.name}</span>
            <button
              type="button"
              className="delete-icon"
              style={styleBtn}
              onClick={handleRemoveImage}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default UploadFile;
