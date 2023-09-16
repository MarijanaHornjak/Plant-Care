import React from "react";
import "./Home.scss";
import HomeImage from "../../assets/hands.jpg";
import Leaf from "../../assets/Leaf.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <div className="home-caption">
        <img src={Leaf} alt="leaf" className="leaf-1" />
        <img src={Leaf} alt="leaf" className="leaf-2" />
        <img src={Leaf} alt="leaf" className="leaf-3" />
        <h1>Plant Nurse</h1>
        <h3>
          Welcome to the place where you can find how to care for plants and how
          plants can take care of us.
        </h3>
        <div className="caption-link">
          <h4>Let's begin your journey</h4>

          <Link to="/plants">Plants</Link>
          <Link to="/care">Care</Link>
        </div>
      </div>
      <div className="home-image-container">
        <img src={HomeImage} alt="hands" />
      </div>
    </main>
  );
};

export default Home;
