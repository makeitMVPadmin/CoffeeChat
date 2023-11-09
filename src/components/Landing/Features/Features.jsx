import "./Features.scss";

const Features = () => {
  return (
      <section className="features">
          <div className="features__box">
      <h2 className="features__title">Features</h2>
      <hr className="features__line" />
      <h3 className="features__subtitle">Smart Matching Algorithm</h3>
      <p className="features__description">
        Ensuring you meet the right people at the right time
      </p>
      <h3 className="features__subtitle">Integrated Calendar</h3>
      <p className="features__description">
        Never double book or miss an opportunity
      </p>
      <h3 className="features__subtitle">In-app Chat</h3>
      <p className="features__description">
        Seamlessly coordinate and break the ice before the meeting
      </p>
      <h3 className="features__subtitle">Privacy Controls</h3>
      <p className="features__description">
        Share what you want, when you want
      </p>
          </div>
    </section>
  );
};

export default Features;
