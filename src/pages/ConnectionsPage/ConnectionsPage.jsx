import React from 'react';
import { Link } from 'react-router-dom';
import './ConnectionsPage.scss';
import logo from '../../assets/logo/FinalLogo.png';
import Navbar from '../../components/Navbar/Navbar';

const ConnectionsPage = ({ people }) => {
  return (
    <div className='connections__container'>
      <h3 className='connections--blue'>
        Let's get you
        <span className='connections--red'> connected!</span>
      </h3>
      <div className='connections__image'>
        <img className='connections__image-img' src={logo} alt='' />
      </div>

      <div className='connections__box'>
        <p>Finding your best three matches...</p>
      </div>

      {/* <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/chat/${person.id}`}>
              <img src={person.profilePicture} alt={person.name} />
              {person.name}
            </Link>
          </li>
        ))}
      </ul> */}

<Navbar/>
    </div>
  );
};

export default ConnectionsPage;
