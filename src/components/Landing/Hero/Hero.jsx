import "./Hero.scss";
import cards from "../../../assets/images/cards.png";
import backgroundDesign from "../../../assets/images/background-visual.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__container--content">
          <div className="hero__container--main">
            <h1 className="hero__title">
              You have <span className="hero__title--highlight">depth</span>,
              why keep your professional connections superficial?
            </h1>
            <div className="hero__container--cards">
              <img src={cards} alt="" className="hero__cards" />
            </div>
          </div>
          <div className="hero__container--button">
            <button className="hero__button">
              Sign Up for Email Notifications
            </button>
          </div>
          <div className="hero__container--background">
            <img
              className="hero__background"
              src={backgroundDesign}
              alt="background visual"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
