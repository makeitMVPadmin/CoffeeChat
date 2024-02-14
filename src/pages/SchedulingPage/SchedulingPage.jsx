import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import "./SchedulingPage.scss";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Left from "../../assets/icons/calendar/Left.png"
import calendarCheck from "../../assets/icons/calendar/calendarCheck.svg"
import clock from "../../assets/icons/calendar/clock.svg"
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
Modal.setAppElement("#root");

const SchedulingPage = ({ people, db }) => {
  const { id } = useParams();
  const nav = useNavigate()
  const person = people.find((p) => p.id === Number(id));
  const timePreferences = person.timePreferences;

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // State to track selected date, time, and meeting type
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMeetingType, setSelectedMeetingType] = useState(null);

  // Function to handle booking
  const saveBooking = async () => {
    if (selectedDate && selectedTime && selectedMeetingType) {
      // Define the data to be saved in Firestore
      const bookingData = {
        date: selectedDate,
        time: selectedTime,
        meetingType: selectedMeetingType,
      };

      try {
        // Add the booking data to a Firestore collection
        await addDoc(collection(db, "bookings"), bookingData);
        console.log("Booking saved to Firestore");

        // After booking, clear the selected time and meeting type
        setSelectedTime(null);
        setSelectedMeetingType(null);
        nav('/booked')
      } catch (error) {
        console.error("Error saving booking: ", error);
      }
    } else {
      alert("Please select a date, time, and meeting type.");
    }

    // const confirmationMessage = (
    //   <div className="confirmation-modal">
    //     {/* TODO: Add logged in user's name & meeting type */}
    //     <img className="backArrow" src={Left} alt="backArrow" />
    //     <h1 className="calendarTitle">Calendar</h1>

    //     <div className="bookings">
    //         <p className="bookedUser">Raj Dev</p>
    //         <p className="userRole">software Engineer</p>
    //         <div className="bookingSchedule">
    //           <p className="bookingDate">
    //             <img src={calendarCheck} alt="calendarCheck" className="calendarCheck"/> 
    //             Sun, Oct 08 </p>
    //           <p className="bookingTime">
    //             <img src={clock} alt="clock" className="clock"/> 
    //             3.30 PM</p>
    //         </div>
    //       </div>

    //     <p>
    //       Get ready ot brew some great connections!
    //     </p>
    //     {/* TODO: Add time chosen, name of person booked & date scheduled*/}
        
    //     <button onClick={closeModal}>Close</button>
    //   </div>
    // );

    // openModal(confirmationMessage);
  };


  // Function to toggle the selected class for time slots
  const toggleTimeSelection = (time) => {
    setSelectedTime(selectedTime === time ? null : time);
  };


  // Function to toggle the selected class for meeting types
  const toggleMeetingTypeSelection = (meetingType) => {
    setSelectedMeetingType(
      selectedMeetingType === meetingType ? null : meetingType,
    );
  };


  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };


  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };


  return (
    <>
      <h1>Pick a time</h1>
      <p className="schedulingHeaders">Pick a date</p>
      <hr />

      {/* Calendar */}
      <Calendar
        onChange={(date) => setSelectedDate(date)} // Handle date selection
        value={selectedDate} // Set the selected date
      />

      <h2 className="schedulingHeaders">Available Time Slots</h2>
      <div className="flexButtons">
        {timePreferences.map((timeSlot) => (
          <button
            key={timeSlot}
            className={selectedTime === timeSlot ? "selectedButton" : "schedulingButton"}
            onClick={() => toggleTimeSelection(timeSlot)}
          >
            {timeSlot}
          </button>
        ))}
      </div>

      <h2 className="schedulingHeaders">Select Meeting Types</h2>
      <div className="flexButtons">
        <button
          className={selectedMeetingType === "1-on-1" ? "selectedButton" : "schedulingButton"}
          onClick={() => toggleMeetingTypeSelection("1-on-1")}>
          1-on-1
        </button>
        <button
          className={
            selectedMeetingType === "Virtual" ? "selectedButton" : "schedulingButton"
          }
          onClick={() => toggleMeetingTypeSelection("Virtual")}>
          Virtual
        </button>
      </div>
      <br/>
      {/* Complete action  */}
      <button 
      className="bookingButton"
      onClick={saveBooking}>Book</button>

      {/* After booking, a new page opens up -- Confirmation Page */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmation Modal"
      >
        {modalContent}
      </Modal>
    </>
  );
};

export default SchedulingPage;
