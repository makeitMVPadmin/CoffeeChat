import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import "./SchedulingPage.scss";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SchedulingPage = ({ people, db }) => {
  const { id } = useParams();
  const person = people.find((p) => p.id === Number(id));

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
        
      } catch (error) {
        console.error("Error saving booking: ", error);
      }
    } else {
      alert("Please select a date, time, and meeting type.");
    }
  };
  

  return (
    <>
      <h1>Connect with {person.name}</h1>
      <p>Pick a date</p>
      <hr />

      {/* Calendar */}
      <Calendar
        onChange={(date) => setSelectedDate(date)} // Handle date selection
              value={selectedDate} // Set the selected date
              className="custom-calendar"
      />

      <h2>Available Time Slots</h2>
      <button onClick={() => setSelectedTime("2:30pm")}>2:30pm</button>
      <button onClick={() => setSelectedTime("3:00pm")}>3:00pm</button>
      <button onClick={() => setSelectedTime("3:30pm")}>3:30pm</button>

      <h2>Select Meeting Type</h2>
      <button onClick={() => setSelectedMeetingType("1-on-1")}>1-on-1</button>
            <button onClick={() => setSelectedMeetingType("Virtual")}>Virtual</button>

      {/* Complete action  */}
      <button onClick={saveBooking}>Book</button>

      {/* After booking, a new page opens up -- Confirmation Page */}
    </>
  );
};

export default SchedulingPage;
