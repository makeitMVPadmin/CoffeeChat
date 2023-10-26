import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.scss";

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSwipeToOnboarding = () => {
    document
      .getElementById("welcome-page")
      .classList.add("swipe-transition-exit");
    setTimeout(() => {
      navigate("/onboarding-page-2");
    }, 500);
  };

  return (
    <div id="welcome-page" className="center-vertically swipe-transition">
      <h1>Welcome</h1>
      <img src="#" alt="welcome group" />
      <h2>Your Journey, Our Connection</h2>
      <h3>Welcome to CoffeeChat!</h3>

      {/* Swipe Arrow */}
      <div className="swipe-arrow" onClick={handleSwipeToOnboarding}>
        <span>Swipe to continue</span>
        <BsFillArrowRightCircleFill className="arrow-icon" />
      </div>
    </div>
  );
};

export default WelcomePage;
