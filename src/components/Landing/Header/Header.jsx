import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import coffeechatLogo from "../../../assets/logo/logo.png";
// TODO: Add search icon
// import searchIcon from "";

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const handleBurger = () => {
    setToggled(!toggled);
  };

  const closeMenu = () => {
    setToggled(false);
  };

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
              <Link className="header__navlist--link" to="#About" onClick={closeMenu}>
                <li className="header__navlist--item">About</li>
              </Link>
              <Link className="header__navlist--link" to="#FAQs" onClick={closeMenu}>
                <li className="header__navlist--item">FAQs</li>
              </Link>
              <Link className="header__navlist--link" to="#Privacy" onClick={closeMenu}>
                <li className="header__navlist--item">Privacy</li>
              </Link>
              <Link className="header__navlist--link" to="Contact" onClick={closeMenu}>
                <li className="header__navlist--item">Contact</li>
              </Link>
              <li className="header__navlist--search"><img src="#" alt="search icon" /></li>
            </div>
          </ul>
          
          <ul className="header__navlist--desktop">
            <div className="header__container--list">
              <Link className="header__navlist--link" to="#About">
                <li className="header__navlist--item">About</li>
              </Link>
              <Link className="header__navlist--link" to="#FAQs">
                <li className="header__navlist--item">FAQs</li>
              </Link>
              <Link className="header__navlist--link" to="#Privacy">
                <li className="header__navlist--item">Privacy</li>
              </Link>
              <Link className="header__navlist--link" to="Contact">
                <li className="header__navlist--item">Contact</li>
              </Link>
              <li className="header__navlist--search"><img src="#" alt="search icon" /></li>
            </div>
          </ul>
        </nav>
      </header>
  );
};

export default Header;
