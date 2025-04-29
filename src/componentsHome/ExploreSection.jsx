import React from "react";
import { useTranslation } from "react-i18next";
import TitleLink from "../components/titleLink/TitleLink";
import VehiclesSection from "../components/vehiclesSection/VehiclesSection";
import Tabs from "../components/tabs/Tabs";

function ExploreSection({ brandsRef }) {
  const { t } = useTranslation();

  return (
    <>
      <TitleLink
        title={t("explore.title")}
        linkTitle={t("explore.linkTitle")}
      />
      <div className="Vt-parent">
        <Tabs />
        <div ref={brandsRef} className="VehiclesSection_parent">
          <VehiclesSection />
        </div>
      </div>
    </>
  );
}

export default ExploreSection;
