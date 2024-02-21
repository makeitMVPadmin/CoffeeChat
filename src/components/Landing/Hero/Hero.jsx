import "./Hero.scss";
import cards from "../../../assets/images/cards.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container--content">
          <div className="hero__container--main">
            <div className="heroContainerText">
            <h1 className="hero__title">
              You have depth,
              why keep your professional connections superficial?
            </h1>
            <h2>Start your journey today!</h2>
            </div>
            <div className="hero__container--cards">
              <img src={cards} alt="" className="hero__cards" />
            </div>
          </div>
          <div className="hero__container--button">
            <button className="hero-sign-btn">
                    Sign In
            </button>
            <button className="hero-sign-btn">
                    Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
