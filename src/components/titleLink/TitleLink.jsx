import React from "react";
import "./TitleLink.css";

function TitleLink({ title, linkTitle }) {
  return (
    <>
      <div className="brands-header">
        <h2>{title}</h2>
        <a href="#">
          {linkTitle}
          <span>↗</span>
        </a>
      </div>
    </>
  );
}

export default TitleLink;
