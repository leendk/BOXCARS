import React, { useState } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["In Stock", "New Cars", "Used Cars"];

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <div
          className="tab-underline"
          style={{
            width: `${100 / tabs.length}%`,
            left: `${(100 / tabs.length) * activeTab}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Tabs;
