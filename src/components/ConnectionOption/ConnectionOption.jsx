import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './ConnectionOption.scss';
import placemarker from '../../assets/icons/connection/place_marker.svg';
import bag from '../../assets/icons/connection/bag.svg';
import cv from '../../assets/icons/connection/CV.svg';
import mentor from '../../assets/icons/connection/handshake.svg';
import githubLogo from '../../assets/icons/connection/github logo.svg';
import linkedinLogo from '../../assets/icons/connection/linkedin logo.svg';
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight, HiOutlineCalendarDays } from "react-icons/hi2";
import userData from "../../data/connectionsPageData.jsx"


const ConnectionOption = () => {
  const { name, profilePicture, bio, location, skills,
  profession, experience, mentoredSessionsAmt } = userData[0];

  const skillDisplay = skills.map(skill => {
    return (
      <div className='connect__outer-box__inner-box__expertise__skill' key={skill}>
        <p>{skill}</p>
      </div>
    )
  })

  return (
    <div className='connect__container'>
      <Link to="/home" relative="path" className="connect__back-arrow">
          <FaArrowLeftLong size={35}/>
      </Link>
      <h2 className='connect__header'>Connections</h2>
      <div className='connect__row'>
        <img className='connect__profile-pic' src={profilePicture} alt='Connection Profile' />
      </div>
      <div className='connect__row--name'>
        <h3 className='connect__profile-name'>{name}</h3>
        <div className='connect__logo-container'>
          <a href='https://www.github.com'>
              <img className='connect__logo' src={githubLogo} alt='GitHub' />
          </a>
          <a href='https://www.linkedin.com'>
              <img className='connect__logo' src={linkedinLogo} alt='LinkedIn Logo' />
          </a>
        </div>
      </div>
      <div className='connect__row'>
        <div className='connect__column'>
          <div className='connect__location-image'>
            <img src={placemarker} alt='Location Icon' />
          </div>
          <p>{location}</p>
        </div>
      </div>
      <div className='connect__outer-box'>
        <div className='connect__outer-box__inner-box'>
          <h4 className='connect__outer-box__inner-box__header'>About Me</h4>
          <p className='connect__outer-box__inner-box__bio'>
           {bio}
          </p>
          <div className='connect__outer-box__inner-box__expertise'>
            <p className='connect__outer-box__inner-box__expertise__header' >EXPERTISE</p>
            {skillDisplay}
          </div>
          <div className='connect__row'>
            <div className='connect__column'>
              <div className='connect__image'>
                <img src={bag} alt='Job Icon' />
              </div>
              <p className='connect__info'>{profession}</p>
            </div>
          </div>
          <div className='connect__row'>
            <div className='connect__column'>
              <div className='connect__image'>
                <img src={cv} alt='Experience Icon' />
              </div>
              <p className='connect__info'>{experience}</p>
            </div>
          </div>
          <div className='connect__row'>
            <div className='connect__column'>
              <div className='connect__image'>
                <img src={mentor} alt='Sessions Icon' />
              </div>
              <p className='connect__info'>{mentoredSessionsAmt} Mentored Sessions</p>
            </div>
          </div>
          <div className='connect__button--container'>
            <div className='connect__button--row'>
              <Link to='/chat/'>
                <div className='connect__button'>
                  <p className='connect__button__text'>
                    Chat
                  </p>
                  <HiOutlineChatBubbleLeftRight size={25}/>
                </div>
              </Link>
              <Link to='/scheduling/1'>
                <div className='connect__button'>
                  <p className='connect__button__text'>
                    Meet
                  </p>
                  <HiOutlineCalendarDays size={25}/>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ConnectionOption;
