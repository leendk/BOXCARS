import React from "react";
import Navbar from "./componentsHome/Navbar";
import HeroSection from "./componentsHome/HeroSection";
import BrandsSection from "./componentsHome/BrandsSection";
import "./App.css";
import AboutSection from "./components/aboutsection/AboutSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <div className="container">
        <BrandsSection />
        <AboutSection />

        <Footer />
      </div>
    </>
  );
}

export default App;
