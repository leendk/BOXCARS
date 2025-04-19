
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandsSection from "./components/BrandsSection";
import AboutSection from "./components/AboutSection";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BrandsSection />
    </>
  );
}

export default App;
