import React from "react";

const ConfirmationModal = ({ onClose }) => {

  return (
      <div className="confirmation-modal">
          {/* TODO: Add logged in user's name & meeting type */}
          <p>Your meeting is confirmed! It is scheduled as an in-person meeting</p>
          {/* TODO: Add time chosen, name of person booked & date scheduled*/}
          <h2>4:15PM</h2>
          <h2>Richard</h2>
          <h3>Wednesday, October 8th 2023</h3>
          <p>Get ready to brew some great connections!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ConfirmationModal;
