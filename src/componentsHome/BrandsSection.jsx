import React from "react";
import TitleLink from "../components/titleLink/TitleLink";
import ExploreSection from "./ExploreSection";

function BrandsSection() {
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
          title="Explore Our Premium Brands"
          linkTitle="Show All Brands"
        />
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={`/${brand.src}`} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
        <ExploreSection />
      </div>
    </section>
  );
}

export default BrandsSection;
