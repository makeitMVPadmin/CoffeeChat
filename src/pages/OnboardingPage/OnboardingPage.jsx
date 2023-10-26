import "./OnboardingPage.scss";
import { Link } from "react-router-dom";

const OnboardingPage = () => {
  return (
    <div className="center-vertically">
      <img src="#" alt="Onboarding connection" />
      <h1>Support Progress Achieve</h1>
      <p>
        Countless individuals have embarked on their mentorship journey, whether
        as mentors or mentees, on CoffeeChat.
      </p>

        {/* Link to the Login Page */}
        <Link to="/login">
        <button>Let's get started</button>
      </Link>
    </div>
  );
};

export default OnboardingPage;
