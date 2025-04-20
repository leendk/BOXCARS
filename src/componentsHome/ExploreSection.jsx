import React from "react";
import TitleLink from "../components/titleLink/TitleLink";
import VehiclesSection from "../components/vehiclesSection/VehiclesSection";
import Tabs from "../components/tabs/Tabs";

function ExploreSection() {
  return (
    <>
      <TitleLink title="Explore All Vehicles" linkTitle="View All" />
      <div className="Vt-parent">
        <Tabs />
        <div className="VehiclesSection_parent">
          <VehiclesSection />
        </div>
      </div>
    </>
  );
}

export default ExploreSection;
