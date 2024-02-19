import React from "react";
import WelcomeNavBar from './WelcomeNavBar';
import LogoMark from "../../assets/logo/Final_logo.svg";
import { Link, useNavigate } from "react-router-dom";
import "./WelcomePage.scss";

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleSwipeToOnboarding = () => {
    document
      .getElementById("onboarding-page")
      .classList.add("swipe-transition-exit");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <>
    <WelcomeNavBar />
   
    <div id="onboarding-page" className="swipe-transition onboarding">
      {" "}
      <div className="onboarding__logo-2-cont">
        {" "}
        <h3 className="onboarding__logo-2-text">CoffeeChat</h3>
      </div>
      <h2 className="onboarding__heading-desktop">
        You have depth, why keep your professional connections superficial?
      </h2>
      <h3 className="onboarding__logo-text">CoffeeChat</h3>
      <h2 className="onboarding__heading-2">
        Let's get you{" "}
        <span className="onboarding__heading-2--color-change">connected</span>{" "}
        today!
      </h2>
      {/* Swipe Arrow */}
      <div className="onboarding__button" onClick={handleSwipeToOnboarding}>
        <p>Join Now</p>
      </div>
      <h2 className=" desktopOnly onboarding__heading-2">
        Let's get you{" "}
        <span className="onboarding__heading-2--color-change">connected</span>{" "}
        today!
      </h2>
    </div>
    </>
  );
};

export default WelcomePage;
