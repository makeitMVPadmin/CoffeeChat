import { useState } from 'react';
import './SearchPage.scss';
import Navbar from '../../components/Navbar/Navbar';
import BackgroundTab from '../../components/Tabs/BackgroundTab';
import MentorshipTab from '../../components/Tabs/MentorshipTab';
import InterestsTab from '../../components/Tabs/InterestsTab';

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
    <div className='tabs'>
      <h1 className=''> Your next connection </h1>

      {/* Tab nav */}
      <ul className='nav'>
        <li
          className={activeTab === 'backgroundtab' ? 'active' : ''}
          onClick={handleBackgroundTab}
        >
          Background
        </li>
        <li
          className={activeTab === 'mentorshiptab' ? 'active' : ''}
          onClick={handleMentorshipTab}
        >
          Mentorship
        </li>
        <li
          className={activeTab === 'intereststab' ? 'active' : ''}
          onClick={handleInterestsTab}
        >
          Interests
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
  );
};

export default SearchPage;
