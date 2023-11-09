import "./Features.scss";

const Features = () => {
  return (
    <section className="features">
      <div className="features__box">
        <div className="features__container--title">
          <h2 className="features__title">Features</h2>
        </div>
        <div className="features__row">
          <div className="features__column">
            <div className="features__container">
              <h3 className="features__subtitle">Smart Matching Algorithm</h3>
              <p className="features__description">
                Ensuring you meet the right people at the right time
              </p>
            </div>
            <div className="features__container">
              <h3 className="features__subtitle">In-app Chat</h3>
              <p className="features__description">
                Seamlessly coordinate and break the ice before the meeting
              </p>
            </div>
          </div>

          <div className="features__column">
            <div className="features__container">
              <h3 className="features__subtitle">Integrated Calendar</h3>
              <p className="features__description">
                Never double book or miss an opportunity
              </p>
            </div>
            <div className="features__container">
              <h3 className="features__subtitle">Privacy Controls</h3>
              <p className="features__description">
                Share what you want, when you want
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
