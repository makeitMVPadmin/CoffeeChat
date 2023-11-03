import "./Header.scss";
import coffeechatLogo from "../../../assets/logo/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__navlist">
            <div className="header__container--logo">
              <img className="header__logo" src={coffeechatLogo} alt="logo" />
            </div>

            <div className="header__container--list">
              <li className="header__navlist--item">About</li>
              <li className="header__navlist--item">FAQs</li>
              <li className="header__navlist--item">Privacy</li>
              <li className="header__navlist--item">Contact</li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
