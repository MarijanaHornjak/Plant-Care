import React from "react";
import "./Footer.scss";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const date = new Date().getFullYear();
  console.log(date);
  return (
    <footer>
      <div className="footer-container">
        <div className="social-icons-container">
          <BsFacebook className="social-icon" />
          <BsInstagram className="social-icon" />
          <FaTiktok className="social-icon" />
          <BsYoutube className="social-icon" />
          <BsTwitter className="social-icon" />
        </div>
        <div className="footer-link-container">
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/plants" className="footer-link">
            Plants
          </Link>
          <Link to="/care" className="footer-link">
            Care
          </Link>
          <Link to="/about" className="footer-link">
            About
          </Link>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright &#169;<span>{date}</span>;
        </p>
        <p>Designed by Marijana Hornjak</p>
      </div>
    </footer>
  );
};

export default Footer;
