import React from "react";
import "../App.css";
import restraunt from "../assets/restraunt.jpg";

const Home = () => {
  return (
    <div className="home">
      <img src={restraunt} alt="Restaurant" className="hero-image" />

      <div className="hero-content">
        <h1>Taste the Art of Fine Dining</h1>

        <p>
          Crafted with passion, served with perfection.
          Enjoy delicious meals prepared by our expert chefs.
        </p>

        <button>Explore Menu</button>
      </div>
    </div>
  );
};

export default Home;
