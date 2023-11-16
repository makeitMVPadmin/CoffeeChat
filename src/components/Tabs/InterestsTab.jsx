import React from "react";
import './Tabs.scss';
import { FaArrowRight } from "react-icons/fa6";

const InterestsTab = () => {
  return (
    <div className='tab__content'>
      <p>Tell us what you love</p>
      <div className='tab__red--container'>
        <div className='tab__red--row'>
          <p className='tab__red'>Social Justice</p>
          <p className='tab__red'>Arts & Culture</p>
          <p className='tab__red'>Travel</p>
          <p className='tab__red'>Food & Drink</p>
          <p className='tab__red'>Fitness</p>
          <p className='tab__red'>Pets</p>
          <p className='tab__red'>Tech</p>
          <p className='tab__red'>Sports</p>
          <p className='tab__red'>Startups</p>
          <p className='tab__red'>Business</p>
        </div>
      </div>
      {/* TODO: Link to Mentorship component */}
      <div className='tab__button--container'>
        <div className='tab__button--row'>
          <button className='tab__button'>
            <p>Find <FaArrowRight /></p> 
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterestsTab;