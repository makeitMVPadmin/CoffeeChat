import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import "./SchedulingPage.scss";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Modal from "react-modal";
import backArrow from "../../assets/icons/wayfinding/back-arrow.svg";
import placeMarker from "../../assets/icons/extras/Place Marker.svg";
Modal.setAppElement("#root");

const SchedulingPage = ({ people, db }) => {
    const { id } = useParams();
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
            } catch (error) {
                console.error("Error saving booking: ", error);
            }
        } else {
            alert("Please select a date, time, and meeting type.");
        }

        const confirmationMessage = (
            <div className="confirmation-modal">
                {/* TODO: Add logged in user's name & meeting type */}
                <p>
                    Your meeting is confirmed! It is scheduled as an in-person
                    meeting
                </p>
                {/* TODO: Add time chosen, name of person booked & date scheduled*/}
                <h2>4:15PM</h2>
                <h2>Richard</h2>
                <h3>Wednesday, October 8th 2023</h3>
                <p>Get ready to brew some great connections!</p>
                <button onClick={closeModal}>Close</button>
            </div>
        );

        openModal(confirmationMessage);
    };

    // Function to toggle the selected class for time slots
    const toggleTimeSelection = (time) => {
        setSelectedTime(selectedTime === time ? null : time);
    };

    // Function to toggle the selected class for meeting types
    const toggleMeetingTypeSelection = (meetingType) => {
        setSelectedMeetingType(
            selectedMeetingType === meetingType ? null : meetingType
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
        <section className="schedule">
            <div className="schedule__header">
                <img className="schedule__header-backarrow" src={backArrow} />
                <h1 className="schedule__header-title">
                    Connect with {person.name}
                </h1>
            </div>
            {/* Calendar */}
            <div className="schedule__calendar--align">
                <Calendar
                    className="schedule__calendar"
                    onChange={(date) => setSelectedDate(date)} // Handle date selection
                    value={selectedDate} // Set the selected date
                />
            </div>
            <p className="schedule__subheading">Available Time Slots</p>
            <div className="schedule__time-buttons">
                {timePreferences.map((timeSlot) => (
                    <button
                        key={timeSlot}
                        className={
                            selectedTime === timeSlot
                                ? "schedule__time-button--active"
                                : "schedule__time-button"
                        }
                        onClick={() => toggleTimeSelection(timeSlot)}
                    >
                        {timeSlot}
                    </button>
                ))}
            </div>
            <p className="schedule__subheading">Select Meeting Type</p>
            <div className="schedule__type-buttons">
                <button
                    className={
                        selectedMeetingType === "In Person"
                            ? "schedule__type-button--active"
                            : "schedule__type-button"
                    }
                    onClick={() => toggleMeetingTypeSelection("1-on-1")}
                >
                    In Person
                </button>
                <button
                    className={
                        selectedMeetingType === "Virtual"
                            ? "schedule__type-button--active"
                            : "schedule__type-button"
                    }
                    onClick={() => toggleMeetingTypeSelection("Virtual")}
                >
                    Virtual
                </button>
            </div>
            <img src={placeMarker} />
            <p>Select Location</p>

            {/* Complete action  */}
            <button onClick={saveBooking}>Book</button>
            {/* After booking, a new page opens up -- Confirmation Page */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation Modal"
            >
                {modalContent}
            </Modal>
        </section>
    );
};

export default SchedulingPage;
