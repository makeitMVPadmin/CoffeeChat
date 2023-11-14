import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__box">
        <div className="newsletter__container--title">
          <h3 className="newsletter__title">
            Stay tuned for our product launch!
          </h3>
        </div>
        <div className="newsletter__column">
          <div className="newsletter__container">
            <p className="newsletter__description">
              Join our ongoing discussion on career development and be the first
              to use CoffeeChat
            </p>
          </div>
        </div>
        <form className="newsletter__form">
          <input
            type="email"
            className="newsletter__input"
            placeholder="email address"
            required
                  />
          <button type="submit" className="newsletter__button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
