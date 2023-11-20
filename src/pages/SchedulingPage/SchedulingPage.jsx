import { useState } from "react";
import { getCurrentUserId } from "../../utils";
import { doc, addDoc, collection } from "firebase/firestore";
import "./SchedulingPage.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import Modal from "react-modal";
import bgShape from "../../assets/background/bg-accent-shapes-calendar-pg.png";
import backArrow from "../../assets/icons/wayfinding/back-arrow.svg";
import placeMarker from "../../assets/icons/extras/Place Marker.svg";
import virtualMeeting from "../../assets/icons/extras/virtual-meeting.png";
import confirmCalendar from "../../assets/icons/calendar/confirm_calender.png";
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
    const [meetingLocation, setMeetingLocation] = useState("");

    const navigate = useNavigate();

    //Navigates back one step in history
    const handleBackClick = () => {
        navigate(-1);
    };

    // Function to handle booking

    const saveBooking = async () => {
        if (!selectedDate) {
            alert("Please select a date.");
        } else if (!selectedTime) {
            alert("Please select a time.");
        } else if (!selectedMeetingType) {
            alert("Please select a meeting type.");
        } else if (!meetingLocation) {
            alert("Please enter where you will be meeting.");
        } else {
            // Define the data to be saved in Firestore
            const bookingData = {
                Name: person.name,
                Date: selectedDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }),
                Time: selectedTime,
                MeetingType: selectedMeetingType,
            };

            if (selectedMeetingType === "in person") {
                bookingData["Address"] = meetingLocation;
            } else if (selectedMeetingType === "virtual") {
                bookingData["URL"] = meetingLocation;
            }

            try {
                //Creates instance of current user to update their collections and add the meeting
                const userId = await getCurrentUserId();

                // Reference to the user's document in Firestore
                const userDocRef = doc(db, "Users", userId);

                // Add the booking data to a subcollection named "bookings"
                const bookingsCollectionRef = collection(
                    userDocRef,
                    "Meetings"
                );

                // Add the booking data to the "bookings" subcollection
                await addDoc(bookingsCollectionRef, bookingData);

                console.log("Booking saved to Firestore");

                const confirmationMessage = (
                    <div className="schedule-modal-container">
                        {/* TODO: Add logged in user's name & meeting type */}
                        <img
                            className="schedule-modal-container__icon "
                            src={confirmCalendar}
                            alt="Calendar Confirmation Icon"
                        />
                        <p className="schedule-modal-container__confirm-msg">
                            Your {selectedMeetingType} meeting with{" "}
                            {person.name} at {meetingLocation} has been
                            confirmed.
                        </p>
                        <h3 className="schedule-modal-container__time">
                            {selectedDate &&
                                selectedDate.toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                })}
                        </h3>
                        <h3 className="schedule-modal-container__time">{`at ${selectedTime && selectedTime.toString()
                            }`}</h3>

                        <p className="schedule-modal-container__confirm-msg">
                            Get ready to brew some great connections!
                        </p>
                        <button
                            className="schedule-modal-container__button"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                );

                openModal(confirmationMessage);

                // After booking, clear the selected time and meeting type
                setSelectedTime(null);
                setSelectedMeetingType(null);
            } catch (error) {
                console.error("Error saving booking: ", error);
            }
        }
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

    const handleMeetingLocation = (e) => {
        setMeetingLocation(e.target.value);
    };

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
        navigate("/home");
    };

    return (
        <section className="schedule">
            <Link>
                <img className="schedule__bg-shape" src={bgShape} />
            </Link>
            <div className="schedule__container">
                <div className="schedule__header">
                    <img
                        className="schedule__header-backarrow"
                        src={backArrow}
                        onClick={handleBackClick}
                    />
                    <h1 className="schedule__header-title">
                        Connect with {person.name}
                    </h1>
                </div>
                {/* Calendar */}
                <div className="schedule__calendar--align">
                    <Calendar
                        className="schedule__calendar"
                        calendarType="US"
                        prev2Label={null}
                        next2Label={null}
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
                            selectedMeetingType === "in person"
                                ? "schedule__type-button--active"
                                : "schedule__type-button"
                        }
                        onClick={() => toggleMeetingTypeSelection("in person")}
                    >
                        In Person
                    </button>
                    <button
                        className={
                            selectedMeetingType === "virtual"
                                ? "schedule__type-button--active"
                                : "schedule__type-button"
                        }
                        onClick={() => toggleMeetingTypeSelection("virtual")}
                    >
                        Virtual
                    </button>
                </div>
                {selectedMeetingType === "in person" ? (
                    <div className="schedule__location">
                        <div className="schedule__location-heading">
                            <img
                                className="schedule__location-heading-icon"
                                src={placeMarker}
                            />
                            <p className="schedule__location-heading-subtitle">
                                Enter Meeting Location
                            </p>
                        </div>
                        <textarea
                            className="schedule__location-input"
                            placeholder="Enter the location of where you will be meeting."
                            value={meetingLocation}
                            onChange={handleMeetingLocation}
                        ></textarea>
                    </div>
                ) : selectedMeetingType === "virtual" ? (
                    <div className="schedule__location">
                        <div className="schedule__location-heading">
                            <img
                                className="schedule__location-heading-icon"
                                src={virtualMeeting}
                            />
                            <p className="schedule__location-heading-subtitle">
                                Enter URL for Virtual Meeting
                            </p>
                        </div>
                        <textarea
                            className="schedule__location-input"
                            placeholder="Enter the URL address of where your virtual meeting will be."
                            value={meetingLocation}
                            onChange={handleMeetingLocation}
                        ></textarea>
                    </div>
                ) : (
                    <div></div>
                )}

                {/* Complete action  */}
                <div className="schedule__book">
                    <button
                        className="schedule__book-button"
                        onClick={saveBooking}
                    >
                        Book
                    </button>
                </div>
            </div>
            {/* After booking, a new page opens up -- Confirmation Page */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Confirmation Modal"
                className="schedule-modal"
                style={{
                    overlay: {
                        zIndex: 1000, // Sets the Modal infront of page
                    },
                }}
            >
                {modalContent}
            </Modal>
        </section>
    );
};

export default SchedulingPage;
