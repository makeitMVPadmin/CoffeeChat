import "./Partners.scss";
import phoneMockup from "../../../assets/images/Partners Mockup.png";
import lastingImage from "../../../assets/images/lasting-connections.png";
import professionalImage from "../../../assets/images/professional.png";

const Partners = () => {
  return (
    <>
      <section className="partners">
        <h2 className="partners__title">Partners we work with</h2>

        <img
          src={phoneMockup}
          alt="Phone holding mockup"
          className="partners__mockup"
        />

        <h3 className="partners__description">
          <span className="partners__highlight">CoffeeChat</span> leverages AI
          into finding you a perfect professional match, no more connections
          that leads nowhere
        </h3>

        <img
          src={lastingImage}
          alt="two women connecting"
          className="partners__image"
        />
        <img
          src={professionalImage}
          alt="two people collaborating"
          className="partners__image"
              />
              
      </section>
    </>
  );
};

export default Partners;
