import './Tabs.scss';
import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const BackgroundTab = () => {
  return (
    <div className='tab__content'>
      <p>EXPERTISE</p>
      <div className='tab__darkblue--container'>
        <div className='tab__darkblue--row'>
          <p className='tab__darkblue'>Design</p>
          <p className='tab__darkblue'>Product</p>
        </div>
      </div>

      <p>DISCIPLINE</p>
      <div className='tab__lightblue--container'>
        <div className='tab__lightblue--row'>
          <p className='tab__lightblue'>UI Design</p>
          <p className='tab__lightblue'>Product Design</p>
          <p className='tab__lightblue'>Operations</p>
          <p className='tab__lightblue'>Sales</p>
          <p className='tab__lightblue'>Marketing</p>
          <p className='tab__lightblue'>Strategy</p>
          <p className='tab__lightblue'>Engineering</p>
        </div>
      </div>

      <p>INDUSTRIES</p>
      <div className='tab__red--container'>
        <div className='tab__red--row'>
          <p className='tab__red'>Tech</p>
          <p className='tab__red'>Healthcare</p>
          <p className='tab__red'>Finance</p>
        </div>
      </div>
      <p>EXPERIENCE (years)</p>
      <div className='tab__yellow--container'>
        <div className='tab__yellow--row'>
          <p className='tab__yellow'>0-1</p>
          <p className='tab__yellow'>2-4</p>
          <p className='tab__yellow'>5+</p>
        </div>
      </div>

      {/* TODO: Link to Mentorship component */}
      <div className='tab__button--container'>
        <div className='tab__button--row'>
          <button className='tab__button'>
            <p>Next <FaArrowRight /></p> 
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundTab;
