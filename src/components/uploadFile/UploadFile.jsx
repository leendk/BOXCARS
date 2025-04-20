import React from "react";

function UploadFile({
  previewUrl,
  uploading,
  formValues,
  handleFileChange,
  fileInputRef,
  handleRemoveImage,
  text,
}) {
  return (
    <>
      <label>{text || "Profile Image"}</label>
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
              <span>{uploading ? "Loading..." : "Choose Image"}</span>
            </label>
          </>
        ) : (
          <div className="img-preview">
            <img src={previewUrl} alt="Preview" />
            <span>{formValues.image && formValues.image.name}</span>
            <button
              type="button"
              className="delete-icon"
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
