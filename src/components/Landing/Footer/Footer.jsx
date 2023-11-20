import { Link } from "react-router-dom";
import "./Footer.scss";
import coffeechatLogo from "../../../assets/logo/FinalLogo.png";

const Footer = () => {
  const navLinks = [
    { to: "#About", text: "About" },
    { to: "#FAQs", text: "FAQs" },
    { to: "/landing-page/Privacy", text: "Privacy" },
    { to: "/landing-page/Contact", text: "Contact" },
  ];

  const renderNavLinks = (links) =>
    links.map((link, index) => (
      <li key={index} className="footer__list-item">
        <Link className="footer__list-item" to={link.to}>{link.text}</Link>
      </li>
    ));

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--logo">
          <img src={coffeechatLogo} alt="Logo" className="footer__logo" />
        </div>
        <nav className="footer__list">
          <ul className="footer__items">
            {renderNavLinks(navLinks)}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
