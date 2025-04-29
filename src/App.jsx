import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./componentsHome/Navbar";
import HeroSection from "./componentsHome/HeroSection";
import BrandsSection from "./componentsHome/BrandsSection";
import AboutSection from "./components/aboutsection/AboutSection";
import SubscriptionPlans from "./components/subscriptionplanssection/SubscriptionPlansSection";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const { i18n } = useTranslation(); // استخدم i18n للوصول للغة الحالية
  const subscriptionRef = useRef(null);
  const aboutRef = useRef(null);
  const brandsRef = useRef(null);

  // عند تغيير اللغة، عدّل اتجاه الصفحة والوسم lang
  useEffect(() => {
    const lang = i18n.language;
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr"; // ثابت دائماً
    document.body.dir = "ltr"; // ثابت دائماً
  }, [i18n.language]);

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
