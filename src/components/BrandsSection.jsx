
import React from "react";

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
      <div className="container">
        <div className="brands-header">
          <h2>Explore Our Premium Brands</h2>
          <a href="#">Show All Brands <span>↗</span></a>
        </div>
        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div className="brand-card" key={index}>
              <img src={`/${brand.src}`} alt={brand.name} />
              <p>{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsSection;
