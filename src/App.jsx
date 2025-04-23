import React, { useRef } from "react";
import Navbar from "./componentsHome/Navbar";
import HeroSection from "./componentsHome/HeroSection";
import BrandsSection from "./componentsHome/BrandsSection";
import "./App.css";
import AboutSection from "./components/aboutsection/AboutSection";
import Footer from "./components/footer/Footer";
import SubscriptionPlans from "./components/subscriptionplanssection/SubscriptionPlansSection";

function App() {
  const subscriptionRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);

  return (
    <>
      <Navbar
        onSubscriptionClick={() => {
          subscriptionRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        onAboutClick={() => {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        onBrandsClick={() => {
          brandsRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <HeroSection />
      <div className="container">
        <BrandsSection brandsRef={brandsRef} />
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={subscriptionRef}>
          <SubscriptionPlans />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
