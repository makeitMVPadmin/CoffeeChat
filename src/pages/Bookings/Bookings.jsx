import React from "react";
import { useEffect, useState } from "react";




export const Bookings = () => {

  const { yourBooking, setYourBooking } = useState([])





  return (
    <>
      <h1>Calendar</h1>
      <div className="calenderMenu">
        <div className="upcoming">
          Upcoming { yourBooking > 0 ? 
            (<span>hi</span>)
            :
            ''
            }
          <div className="upcomingBooking">
            <h4 className="bookedUser">user.name</h4>
            <div className="userRole">user.role</div>
            <div className="bookingSchedule">
              <div className="bookingDate"> booking.date</div>
              <div className="bookingTime"> booking.time</div>
            </div>
          </div>
        </div>

        <div className="history">History</div>
      </div>
    </>
  )
}