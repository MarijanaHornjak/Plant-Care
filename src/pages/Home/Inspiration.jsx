import React from "react";
import "./Inspiration.scss";
import Lavender from "../../assets/lavender.jpg";
import RedFlower from "../../assets/redflower.jpg";
import PinkAndYellowFlowers from "../../assets/pinkandyellow.jpg";
import Gooseberry from "../../assets/gooseberry.jpg";
import ForgetMeNot from "../../assets/forget-me-not.jpg";
import Camomile from "../../assets/camomile.jpg";
import { Link } from "react-router-dom";
const Inspiration = () => {
  return (
    <section className="inspiration-section">
      <h1>Plants&Inspiration</h1>
      <div className="inspiration-container">
        <div className="section-image-container">
          <img src={Lavender} alt="flower" />
          <img src={RedFlower} alt="flower" />
          <img src={PinkAndYellowFlowers} alt="flower" />
          <img src={Gooseberry} alt="flower" />
          <img src={ForgetMeNot} alt="flower" />
          <img src={Camomile} alt="flower" />
        </div>
        <div className="section-text-container">
          <h2>Transform your Garden Oasis:</h2>
          <h3>Ideas for a blooming paradise</h3>
          <p>
            Welcome to our 'Plants and Inspiration' garden section.Discover tips
            for cultivation vibrant blooms,creating serene outdoor spaces, and
            nurturing your garden sanctuary.
          </p>
          <Link to="/plants">Discover</Link>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
