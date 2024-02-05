import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './ConnectionOption.scss';
import placemarker from '../../assets/icons/connection/place_marker.svg';
import reviews from '../../assets/icons/connection/reviews_placeholder.svg';
import bag from '../../assets/icons/connection/bag.svg';
import cv from '../../assets/icons/connection/CV.svg';
import mentor from '../../assets/icons/connection/fi-rr-hand-holding-heart.svg';
import githubLogo from '../../assets/icons/connection/github logo.svg';
import linkedinLogo from '../../assets/icons/connection/linkedin logo.svg';
import profilePicture from '../../assets/icons/connection/Teacher.svg';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaArrowLeftLong } from "react-icons/fa6";

const ConnectionOption = () => {
  return (
    <div className='connect__container'>
      <Link to="/home" relative="path" className="connect__back-arrow"> {/* This triggers an app crash, needs troubleshooting */}
          <FaArrowLeftLong size={35}/>
      </Link>
      <h2 className='connect__header'>Connections</h2>
      <div className='connect__row'>
        <img className='connect__profile-pic' src={profilePicture} alt='Connection Profile' />
      </div>

      <div className='connect__row'>
        <h3 className='connect__profile-name'>Raj Dev</h3>
      </div>

      <div className='connect__row'>
        <div className='connect__column'>
          <div className='connect__image'>
            <img src={placemarker} alt='Location Icon' />
          </div>
          <p>Portland, OR</p>
        </div>
        <div className='connect__column'>
          <img src={reviews} alt='Reviews icon' />
        </div>
      </div>

      <div className='connect__outer-box'>
        <div className='connect__row'>
          <div className='connect__column'>
            <div className='connect__image'>
              <img src={bag} alt='Job Icon' />
            </div>
            <p>Software Engineer</p>
          </div>
          <div className='connect__column'>
            <a href='https://www.linkedin.com'>
              <img src={linkedinLogo} alt='LinkedIn Logo' />
            </a>
          </div>
        </div>

        <div className='connect__row'>
          <div className='connect__column'>
            <div className='connect__image'>
              <img src={cv} alt='Experience Icon' />
            </div>
            <p>Mid Level - 2 years</p>
          </div>
          <div className='connect__column'>
            <a href='https://www.github.com'>
              <img src={githubLogo} alt='GitHub' />
            </a>
          </div>
        </div>

        <div className='connect__row'>
          <div className='connect__column'>
            <div className='connect__image'>
              <img src={mentor} alt='Sessions Icon' />
            </div>
            <p>20 Mentored Sessions</p>
          </div>
        </div>

        <div className='connect__outer-box__inner-box'>
          <p className='connect__outer-box__inner-box__header'>
            EXPERTISE{' '}
            <span className='connect__outer-box__inner-box__header__skill'>
              Java
            </span>{' '}
            <span className='connect__outer-box__inner-box__header__skill'>
              C++
            </span>{' '}
            <span className='connect__outer-box__inner-box__header__skill'>
              HTML5
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* <div className='connect__button--container'>
            <div className='connect__button--row'>
              <Link to='/scheduling/1'>
                <div className='connect__button'>
                  <p>
                    Connect{' '}
                    <span>
                      <FaArrowRightLong />
                    </span>{' '}
                  </p>
                </div>
              </Link>
            </div>
          </div> */}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ConnectionOption;
