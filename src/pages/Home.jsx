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
    </section>
  );
};

export default Home;
