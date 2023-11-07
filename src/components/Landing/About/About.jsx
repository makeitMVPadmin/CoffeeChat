import "./About.scss";
import phoneMockup from "../../../assets/images/phone-mockup.png";
import backgroundDesign from "../../../assets/images/background-visuals-2.png";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about__container--info">
          <h2 className="about__info">
            <span className="about__info--highlight">Coffee Chat</span> is here
            to change the game.
          </h2>
        </div>

        <div className="about__container--info">
          <h2 className="about__info">
            Our <span className="about__info--highlight">smart matching</span>{" "}
            algorithm pairs you with relevant professionals in your area for
            casual meet-ups.
          </h2>
        </div>

        <div className="about__container--info">
          <h2 className="about__info">
            It's time to network with{" "}
            <span className="about__info--highlight">depth, </span>over a cup of
            coffee, and take your career to the next level.
          </h2>
        </div>

          
        <div className="about__container--content">
       <div className="about__container--background">
          <img
            className="about__background"
            src={backgroundDesign}
            alt="Background design"
          />
          </div> 

          <div className="about__container--points">
            <div className="about__container--main">
              <h2 className="about__title">Strengthen Your Network</h2>
              <p className="about__description">
                Form deeper connections through face-to-face interactions.
              </p>
            </div>

            <div className="about__container--main">
              <h2 className="about__title">Diversify Your Connections</h2>
              <p className="about__description">
                Meet professionals outside of your immediate circle.
              </p>
            </div>

            <div className="about__container--main">
              <h2 className="about__title">Growth Opportunities</h2>
              <p className="about__description">
                Whether it's a job referral, partnership, or mentorship, the
                possibilities are endless.
              </p>
            </div>
          </div>

          <div className="about__container--image">
            <img
              className="about__image"
              src={phoneMockup}
              alt="Hand holding phone"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
