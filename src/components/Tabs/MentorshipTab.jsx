import React from 'react';
import './Tabs.scss';
import { FaArrowRight } from "react-icons/fa6";


const MentorshipTab = () => {
  return (
    <div className='tab__content'>
      <p>Are you a <span className='mentorshipStatus'>mentee</span>?</p>
      <br />
      <br />
      <p>Topics you are looking for support with </p>
      <div className='tab__darkblue--container'>
        <div className='tab__darkblue--row'>
          <p className='tab__darkblue'>Work/Life Balance</p>
          <p className='tab__darkblue'>Career Development</p>
          <p className='tab__darkblue'>Salary Negotations</p>
          <p className='tab__darkblue'>Exploring New Career</p>
          <p className='tab__darkblue'>Workplace Politics</p>
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

export default MentorshipTab;
