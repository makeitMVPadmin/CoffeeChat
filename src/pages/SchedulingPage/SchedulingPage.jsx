import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import "./SchedulingPage.scss";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const SchedulingPage = ({ people, db }) => {
  const { id } = useParams();
  const person = people.find((p) => p.id === Number(id));
    const timePreferences = person.timePreferences;

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
      } catch (error) {
        console.error("Error saving booking: ", error);
      }
    } else {
      alert("Please select a date, time, and meeting type.");
    }
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

  return (
    <>
      <h1>Connect with {person.name}</h1>
      <p>Pick a date</p>
      <hr />

      {/* Calendar */}
      <Calendar
        onChange={(date) => setSelectedDate(date)} // Handle date selection
        value={selectedDate} // Set the selected date
      />

<h2>Available Time Slots</h2>
      {timePreferences.map((timeSlot) => (
        <button
          key={timeSlot}
          className={selectedTime === timeSlot ? "selected-button" : ""}
          onClick={() => toggleTimeSelection(timeSlot)}
        >
          {timeSlot}
        </button>
      ))}


      <h2>Select Meeting Type</h2>
      <button
        className={selectedMeetingType === "1-on-1" ? "scheduling__button" : ""}
        onClick={() => toggleMeetingTypeSelection("1-on-1")}
      >
        1-on-1
      </button>
      <button
        className={selectedMeetingType === "Virtual" ? "scheduling__button" : ""}
        onClick={() => toggleMeetingTypeSelection("Virtual")}
      >
        Virtual
      </button>

      {/* Complete action  */}
      <button onClick={saveBooking}>Book</button>

      {/* After booking, a new page opens up -- Confirmation Page */}
    </>
  );
};

export default SchedulingPage;
