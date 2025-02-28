import React from "react";
import "../styles/Home.css";
import toolsImage from "../assets/home.jpeg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-text">
        <h1 className="fade-in">Your Trusted <span>Service Partner</span></h1>
        <p className="slide-in">We provide top-quality AC, Fridge, and Solar Installation Services.</p>
      </div>
      <div className="home-image">
        <img src={toolsImage} alt="Tools" className="slide-up" />
      </div>

      {/* Service Areas Section */}
      <section className="service-areas">
        <h2>Areas We Provide Services</h2>
        <div className="area-list">
          <div className="area">DHA</div>
          <div className="area">Saddar</div>
          <div className="area">North Karachi</div>
          <div className="area">Korangi</div>
          <div className="area">PIB Colony</div>
          <div className="area">Gulshan-e-Maymar</div>
          <div className="area">Gulistan-e-Johar</div>
          <div className="area">Gulshan-e-Iqbal</div>
          <div className="area">Bahria Town</div>
        </div>
      </section>
    </section>
  );
};

export default Home;
