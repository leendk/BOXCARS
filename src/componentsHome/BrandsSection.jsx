
import React from "react";
import { useTranslation } from "react-i18next";
import TitleLink from "../components/titleLink/TitleLink";
import ExploreSection from "./ExploreSection";

function BrandsSection({ brandsRef }) {
  const { t } = useTranslation();

  const brands = [
    { src: "Audi.jpg", name: "Audi" },
    { src: "BMW.png", name: "BMW" },
    { src: "Ford.jpg", name: "Ford" },
    { src: "Mercedes Benz.png", name: "Mercedes Benz" },
    { src: "Peugeot.jpg", name: "Peugeot" },
    { src: "Volkswagen.jpg", name: "Volkswagen" },
  ];

  return (
    <section className="brands-section">
      <div>
        <TitleLink
          title={t("brands.title")}
          linkTitle={t("brands.showAll")}
        />
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={`/${brand.src}`} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
        <ExploreSection brandsRef={brandsRef} />
      </div>
    </section>
  );
}

export default BrandsSection;
