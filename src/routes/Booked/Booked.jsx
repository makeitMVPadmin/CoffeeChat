import React from "react";
import "./Booked.scss";
import Left from "../../assets/icons/calendar/Left.png"
import blueCalendar from '../../assets/icons/calendar/blueCalendar.svg'
import google from '../../assets/icons/links/google.svg'
import blankUserImg from '../../assets/images/blankUserImg.png'
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router";



export const Booked = () => {

    const nav = useNavigate()



    return(
        <div className="bookedBody">
        <img className="backArrow" src={Left} alt="backArrow" onClick={() => nav('/home')} />
        <h1 className="calendarTitle">Calendar</h1>

        <div className="bookedUser">
            <div >
                <img src={blankUserImg} alt="userImg" className="userImg"/>
            </div>
            <div className="bookedUserInfo">
                <p className="bookedUserName">vanessa vajellos</p>
                    <br></br>
                <p className="bookedUserRole"> senior software Engineer</p>
            </div>
            <div className="bookedDay">
                <img src={blueCalendar} alt="blueCalendar" className="blueCalendar"/>
                <p className="bookedTime">9:14 pm</p>
            </div>
        </div>

        <div className="bookedMessage1">
            <h2>You're Booked!</h2>
            <p className="bookedMessage2">
            Get ready to brew
                <br></br>
            great connections!
            </p>
        </div>

        <button className="googleCalendarBtn">
          <img src={google} alt="google" className="googleLink"/>
            Add to calendar
        </button>
        <Navbar/>
        </div>
    )
}