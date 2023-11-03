const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <img className="header__logo" src="#" alt="logo" />
          <ul className="header__navlist">
            <li className="header__navlist--item">About</li>
            <li className="header__navlist--item">FAQs</li>
            <li className="header__navlist--item">Privacy</li>
            <li className="header__navlist--item">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
