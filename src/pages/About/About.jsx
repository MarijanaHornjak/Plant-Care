import React from "react";
import "./About.scss";
import Gardener from "../../assets/cc8fbb10ac6b0058745979cc4614ee2f.jpg";
import Gardener1 from "../../assets/9cab84dfa18b28c0303c7d5e4dcd4dce.jpg";
import Gardener2 from "../../assets/de63de8138918c78d7ad5260dafb806a.jpg";
const About = () => {
  return (
    <main className="about-section">
      <div className="about-container">
        <div className="about-image-container">
          <img src={Gardener} alt="gardener" />
          <img src={Gardener1} alt="gardener" />
          <img src={Gardener2} alt="gardener" />
        </div>
        <div className="about-text-container">
          <h1>
            A Decade of Blooms: Celebrating Our First 10 Years-Hire Your
            Personal Gardener Today!
          </h1>
          <p>
            Choose your Gardener: Select the gardener whose skills and expertise
            align with your gardening needs and preferences.
          </p>
          <p>
            Schedule a Consultation: Arrange a consultation with your chosen
            gardener to discuss your garden's goals and requirements.
          </p>
          <p>
            Personalized Care: Your dedicated gardener will provide tailored
            care and maintenance, ensuring your garden thrives.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
