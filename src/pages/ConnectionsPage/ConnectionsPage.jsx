import React from "react";
import { Link } from "react-router-dom";

const ConnectionsPage = ({ people }) => {
  return (
    <div>
      <h1>Connections</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            <Link to={`/chat/${person.id}`}>
              <img src={person.profilePicture} alt={person.name} />
              {person.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectionsPage;
