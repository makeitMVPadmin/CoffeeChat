import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const [meetings, setMeetings] = useState(false);
  const auth = getAuth(app);
  const navigate = useNavigate();
  useEffect(() => {
    const getUserMeetings = async () => {
      const user = auth.currentUser;

      if (user) {
        const uid = user.uid;
        try {
          const userDocRef = doc(collection(db, "Users"), uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const meetingsCollectionRef = collection(userDocRef, "Meetings");
            const meetingsQuerySnapshot = await getDocs(meetingsCollectionRef);

            if (!meetingsQuerySnapshot.empty) {
              const meetingsData = [];
              meetingsQuerySnapshot.forEach((meetingDoc) => {
                const meetingData = meetingDoc.data();
                meetingsData.push(meetingData);
              });
              setMeetings(meetingsData);
            }
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error getting user meetings:", error.message);
        }
      } else {
        console.log("No user is currently logged in");
      }
    };

    getUserMeetings();
  }, [auth]);
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("logged out");
        navigate("/login"); // Navigate to the root path after logout
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="home">
      <div className="buttonContainer">
        <button onClick={logout} className="logoutBtn">
          logout
        </button>
      </div>

      <div className="homeHeader">
        <h1 className="WelcomeTitle">
          Welcome, <br></br> name!
        </h1>
        <div className="accountBtn"></div>
      </div>

      <h3 className="scheduleTitle">Schedule</h3>

      <div className="scheduleDiv">
        <h4 className="ScheduleDivTitle">Upcoming Sessions</h4>
        {meetings.length > 0 ? (
          <>
            {meetings.map((meeting, index) => (
              <div className="scheduleList">
                <div key={index} className="scheduledItem">
                  <p className="scheduledNameOnly">{meeting.Name}</p>
                  <div>
                    {" "}
                    <p className="scheduledName">{meeting.Location}</p>
                    <p className="scheduledName">{meeting.Date}</p>{" "}
                    <p className="scheduledName">{meeting.Time}</p>
                    <p className="scheduledName">{meeting.MeetingType}</p>
                  </div>
                </div>{" "}
              </div>
            ))}
          </>
        ) : (
          <div className="scheduleList">
            <p className="scheduledNone">No Meets Scheduled</p>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
};

export default HomePage;
