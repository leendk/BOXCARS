import React from "react";
import { useTranslation } from "react-i18next";
import "./TitleLink.css";

function TitleLink({ title, linkTitle }) {
  const { t } = useTranslation();

  return (
    <div className="brands-header">
      <h2>{t(title)}</h2>
      <a href="#">
        {t(linkTitle)} ↗
      </a>
    </div>
  );
}

export default TitleLink;
