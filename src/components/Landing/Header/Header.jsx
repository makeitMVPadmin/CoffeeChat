import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import coffeechatLogo from "../../../assets/logo/logo.png";
import searchIcon from "../../../assets/icons/landing/search.png";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const handleBurger = () => {
    setToggled(!toggled);
  };

  const closeMenu = () => {
    setToggled(false);
  };


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
      <header className="header">
        <nav className="header__nav">
          <div className="header__container--menu">
            <div
              className={`header__burger ${toggled ? "active" : ""}`}
              onClick={handleBurger}
            >
              <span className="header__burger--line"></span>
              <span className="header__burger--line"></span>
              <span className="header__burger--line"></span>
            </div>
            <div className="header__container--logo">
              <Link to="/landing-page" onClick={closeMenu}>
                <img className="header__logo" src={coffeechatLogo} alt="logo" />
              </Link>
            </div>
          </div>
          <ul className={`header__navlist ${toggled ? "active" : ""}`}>
          <div className="header__container--list">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="header__navlist--link"
                to={link.to}
                onClick={closeMenu}
              >
                <li className="header__navlist--item">{link.text}</li>
              </Link>
            ))}
              <img src={searchIcon} alt="search icon" />
          </div>
        </ul>

        <ul className="header__navlist--desktop">
          <div className="header__container--list">
            {desktopNavLinks.map((link, index) => (
              <Link
                key={index}
                className="header__navlist--link"
                to={link.to}
              >
                <li className="header__navlist--item">{link.text}</li>
              </Link>
            ))} 
              <img className="header__navlist--search" src={searchIcon} alt="search icon" />
          </div>
        </ul>
        </nav>
      </header>
  );
};

export default Header;
