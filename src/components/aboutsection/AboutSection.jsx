import React from "react";
import "./AboutSection.css";
function AboutSection() {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-left">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/PkkV1vLHUvQ"
              title="Car Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="about-right">
          <h1>Get A Fair Price For Your Car</h1>
          <h2>Sell To Us Today</h2>
          <p>
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of:
          </p>
          <ul>
            <li>
              We are the UK's largest provider, with more patrols in more places
            </li>
            <li>You get 24/7 roadside assistance</li>
            <li>We fix 4 out of 5 cars at the roadside</li>
          </ul>
          <a href="#" className="btn">
            Get Started ↗
          </a>
        </div>
      </section>

      {/* قسم الإحصائيات خارج AboutSection ليكون دائمًا تحته */}
      <div className="stats">
        <div className="stat">
          <h2>836M</h2>
          <p>Cars For Sale</p>
        </div>
        <div className="stat">
          <h2>738M</h2>
          <p>Dealer Reviews</p>
        </div>
        <div className="stat">
          <h2>100M</h2>
          <p>Visitors Per Day</p>
        </div>
        <div className="stat">
          <h2>238M</h2>
          <p>Verified Dealers</p>
        </div>
      </div>
    </>
  );
}

export default AboutSection;
