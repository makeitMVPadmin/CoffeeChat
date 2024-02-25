import "./Bookings.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Left from "../../assets/icons/calendar/Left.png"
import calendarCheck from "../../assets/icons/calendar/calendarCheck.svg"
import clock from "../../assets/icons/calendar/clock.svg"
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";




export const Bookings = () => {

  const { yourBooking, setYourBooking } = useState([])
  const [activeButton, setActiveButton] = useState(1);
  const nav = useNavigate()

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };



  return (
    <div className="bookingsBody">
      <div className="blueBackground"></div>
      <img className="backArrow" src={Left} alt="backArrow" onClick={()=>nav(-1)} />
      <h1 className="calendarTitle">Calendar</h1>
      


      <div className="calenderMenu">
        <div className="upcoming"
         onClick={() => handleButtonClick(1)}
         style={{ fontFamily: activeButton === 1 ? 'Corben-bold' : 'Corben' }}>
          Upcoming {yourBooking > 0 ?
            (<span className="bookingNumber">bookingNumber value</span>)
            :
            (<p className="bookingNumber">1</p>)
          }
        </div>

        <div className="history" 
        onClick={()=>handleButtonClick(2)}
        style={{ fontFamily: activeButton === 2 ? 'Corben-bold' : 'Corben' }}>
          History 
        </div>
      </div>

   

      {activeButton === 1 && (
        <div className="bookings">
            {/* upcoming mapping list */}
            <p className="bookingsUser">Raj Dev</p>
            <p className="userRole">Software Engineer</p>
            <div className="bookingSchedule">
              <p className="bookingDate">
                <img src={calendarCheck} alt="calendarCheck" className="calendarCheck"/> 
                Sun, Oct 08 </p>
              <p className="bookingTime">
                <img src={clock} alt="clock" className="clock"/> 
                3:30 PM</p>
            </div>
          </div>
      )}
      

      {activeButton === 2 && (
        <div className="bookings">
            {/* History mapping list */}
            <p className="bookingsUser">History Dev</p>
            <p className="userRole">Software Engineer</p>
            <div className="bookingSchedule">
              <p className="bookingDate">
                <img src={calendarCheck} alt="calendarCheck" className="calendarCheck"/> 
                Fri, Oct 06 </p>
              <p className="bookingTime">
                <img src={clock} alt="clock" className="clock"/> 
                8:30 PM</p>
            </div>
          </div>
      )}
      <Navbar/>
    </div>
  )
}