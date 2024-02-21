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
            {/* TODO: Add in link to email notifications sign up */}
            <button className="hero__button">
              Sign Up for Email Notifications
            </button>
          </div>
          <div className="hero__container--background">
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
