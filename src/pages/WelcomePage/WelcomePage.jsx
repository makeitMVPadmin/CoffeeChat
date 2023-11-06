import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import LogoMark from '../../assets/images/Logomark.png';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.scss';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSwipeToOnboarding = () => {
    document
      .getElementById('onboarding-page')
      .classList.add('swipe-transition-exit');
    setTimeout(() => {
      navigate('/onboarding-page-2');
    }, 500);
  };

  return (
    <div
      id='onboarding-page'
      className='center-vertically swipe-transition onboarding'
    >
      <img src='#' alt='Onboarding background' />
      <br />
      <img src={LogoMark} alt='CoffeeChat logo' />
      <h3>CoffeeChat</h3>

      {/* Swipe Arrow */}
      <div className='swipe-arrow' onClick={handleSwipeToOnboarding}>
        <span className='underline'>
          Join Now <AiOutlineArrowRight className='arrow-icon' />{' '}
        </span>
      </div>
    </div>
  );
};

export default WelcomePage;
