import { useState } from 'react';
import './SearchPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import BackgroundTab from '../../components/Tabs/BackgroundTab';
import MentorshipTab from '../../components/Tabs/MentorshipTab';
import InterestsTab from '../../components/Tabs/InterestsTab';
import interests from '../../assets/icons/search/interests.svg';
import background from '../../assets/icons/search/background.svg';
import mentorship from '../../assets/icons/search/mentorship.svg';
import searchHeader from '../../assets/icons/search/search_header.png';

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState('backgroundtab');

  //  Functions to handle Tab Switching
  const handleBackgroundTab = () => {
    setActiveTab('backgroundtab');
  };
  const handleMentorshipTab = () => {
    setActiveTab('mentorshiptab');
  };
  const handleInterestsTab = () => {
    setActiveTab('intereststab');
  };

  return (
    <div>
      <div className='searchHeader__content'>
        <div className='searchHeader__content--container'>
          <div className='searchHeader__content--row'>
            <h1>
              {' '}
              Your next 
              <br />connection{' '}
            </h1>
            <img src={searchHeader} alt='' />
          </div>
        </div>
      </div>
    <div className='tabs'>

      {/* Tab nav */}
      <ul className='nav'>
        <li
          className={
            activeTab === 'backgroundtab'
              ? 'active backgroundtab'
              : 'backgroundtab'
          }
          onClick={handleBackgroundTab}
        >
          {activeTab === 'backgroundtab' ? (
            <p>
              Background
              <img
                className='navIcons'
                src={background}
                alt='Background Icon'
              />
            </p>
          ) : (
            <img className='navIcons' src={background} alt='Background Icon' />
          )}
        </li>
        <li
          className={
            activeTab === 'mentorshiptab'
              ? 'active mentorshiptab'
              : 'mentorshiptab'
          }
          onClick={handleMentorshipTab}
        >
          {activeTab === 'mentorshiptab' ? (
            <p>
              {' '}
              Mentorship{' '}
              <img
                className='navIcons'
                src={mentorship}
                alt='Mentorship Icon'
              />
            </p>
          ) : (
            <img className='navIcons' src={mentorship} alt='Mentorship Icon' />
          )}
        </li>
        <li
          className={
            activeTab === 'intereststab'
              ? 'active intereststab'
              : 'intereststab'
          }
          onClick={handleInterestsTab}
        >
          {activeTab === 'intereststab' ? (
            <p>
              Interests{' '}
              <img className='navIcons' src={interests} alt='Interests Icon' />{' '}
            </p>
          ) : (
            <img className='navIcons' src={interests} alt='Interests Icon' />
          )}
        </li>
      </ul>

      {/* Tab content */}
      <div className='outlet'>
        {activeTab === 'backgroundtab' && <BackgroundTab />}
        {activeTab === 'mentorshiptab' && <MentorshipTab />}
        {activeTab === 'intereststab' && <InterestsTab />}
      </div>

      <Navbar />
    </div>

    </div>  
    );
};

export default SearchPage;
