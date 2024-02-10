import "./Bookings.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Left from "../../assets/icons/calendar/Left.png"
import calendarCheck from "../../assets/icons/calendar/calendarCheck.svg"
import clock from "../../assets/icons/calendar/clock.svg"
import { useEffect, useState } from "react";




export const Bookings = () => {

  const { yourBooking, setYourBooking } = useState([])
  const nav = useNavigate()




  return (
    <>
      <Link>
        <img className="backArrow" src={Left} alt="backArrow" onClick={nav(-1)}/>
      </Link>
      <h1 className="calendarTitle">Calendar</h1>
      


      <div className="calenderMenu">
        <div className="upcoming">
          Upcoming {yourBooking > 0 ?
            (<span className="bookingNumber">bookingNumber value</span>)
            :
            (<p className="bookingNumber">0</p>)
          }
          <div className="upcomingBooking">
            <p className="bookedUser">Raj Dev</p>
            <p className="userRole">software Engineer</p>
            <div className="bookingSchedule">
              <p className="bookingDate">
                <img src={calendarCheck} alt="calendarCheck" className="calendarCheck"/> 
                Sun, Oct 08 </p>
              <p className="bookingTime">
                <img src={clock} alt="clock" className="clock"/> 
                2.30 PM</p>
            </div>
          </div>
        </div>

        <div className="history">History</div>
      </div>
    </>
  )
}