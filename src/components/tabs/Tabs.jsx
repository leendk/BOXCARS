
import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "In Stock",
    "New Cars",
    "Used Cars"
  ];
  const tabRefs = useRef([]);

  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setUnderlineStyle({
        width: `${currentTab.offsetWidth}px`,
        left: `${currentTab.offsetLeft}px`
      });
    }
  }, [activeTab]);


  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            ref={el => tabRefs.current[index] = el}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
        <div
          className="tab-underline"
          style={underlineStyle}
        />
      </div>
    </div>
  );
};

export default Tabs;
