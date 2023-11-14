import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import coffeechatLogo from "../../../assets/logo/logo.png";

const Footer = () => {
  const navLinks = [
    { to: "#About", text: "About" },
    { to: "#FAQs", text: "FAQs" },
    { to: "#Privacy", text: "Privacy" },
    { to: "Contact", text: "Contact" },
  ];

  const desktopNavLinks = [
    { to: "#About", text: "About" },
    { to: "#FAQs", text: "FAQs" },
    { to: "#Privacy", text: "Privacy" },
    { to: "Contact", text: "Contact" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <img src={coffeechatLogo} alt="Logo" className="footer__logo" />
        </div>
        <div className="footer__column">
          <ul>
            <li>
              <Link to="/landing-page">Home</Link>
            </li>
            <li>
              <Link to="/landing-page/about">Popular</Link>
            </li>
            <li>
              <Link to="/landing-page/services">About</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
            <li>
              <Link to="/landing-page/faq">FAQs</Link>
            </li>
            <li>
              <Link to="/landing-page/privacy">Privacy</Link>
            </li>
            <li>
              <Link to="/landing-page/socials">Socials</Link>
            </li>
          </ul>
        </div>
        <div className="footer__column">
          <ul>
            <li>
              <Link to="/landing-page/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <ul>
            <li>Follow us</li>
            <div className="footer__icons">
              <li>
                <img src="" alt="twitter" />
              </li>
              <li>
                <img src="" alt="facebook" />
              </li>
              <li>
                <img src="" alt="google" />
              </li>
              <li>
                <img src="" alt="instagram" />
              </li>
            </div>

            <div className="footer__store">
              <li>
                <img src="" alt="app store" />
              </li>
              <li>
                <img src="" alt="google play" />
              </li>
            </div>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
