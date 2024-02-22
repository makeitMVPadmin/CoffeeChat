import "./HomePage.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { app, db } from "../../App";
import { getAuth, signOut } from "firebase/auth";
import userPhoto from "../HomePage/sample-user.svg";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";



const HomePage = () => {
  const auth = getAuth(app);
  const [meetings, setMeetings] = useState(false);
  const [userInfo, setUserInfo] = useState(false);




  
  useEffect(() => {
    const getUserMeetings = async () => {
      const user = auth.currentUser;

      if (user) {
        const uid = user.uid;
        try {
          const userDocRef = doc(collection(db, "Users"), uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            setUserInfo(userData);
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
      })
      .catch((error) => {
        console.log("error", error);
      });
  };


  return (
    <div className="home">
      {/* <div className="buttonContainer">
        <button onClick={logout} className="logoutBtn">
          logout
        </button>
      </div> */}

      <div className="homeHeader">
        <h1 className="WelcomeTitle">
          Hello, Alexander {userInfo.fullName || userInfo.displayName}
        </h1>
        <Link to={"/profile"}>
          <img
            src={userInfo.profilePhoto || userPhoto}
            className="accountBtn"
            referrerpolicy="no-referrer"
          ></img>
        </Link>
      </div>

      <div className="homeSection">
        <h3 className="homeSubHeader">Upcoming Meetings</h3>
        {meetings.length > 0 ? (
          <>
            {meetings.map((meeting, index) => (
              <a
                href={
                  meeting.Address
                    ? `https://maps.google.com/?q=${meeting.Address}`
                    : meeting.URL
                }
              >
                <div className="scheduleList">
                  <div key={index} className="scheduledItem">
                    <p className="scheduledNameOnly">{meeting.Name}</p>
                    <div className="scheduledInfo">
                      {" "}
                      <p className="scheduledName UrlAddress">
                        {meeting.Address || meeting.URL}
                      </p>
                      <p className="scheduledName">{meeting.Date}</p>{" "}
                      <p className="scheduledName">{meeting.Time}</p>
                      <p className="scheduledName">{meeting.MeetingType}</p>
                    </div>
                  </div>{" "}
                </div>
              </a>
            ))}
          </>
        ) : (
          <div className="homeList">
            <p className="scheduledNone">No Meets Scheduled</p>
          </div>
        )}
      </div>

      <div className="homeSection">
        <h3 className="homeSubHeader">Chat Inbox</h3>
        {meetings.length > 0 ? (
          <>
            {meetings.map((meeting, index) => (
              <a
                href={
                  meeting.Address
                    ? `https://maps.google.com/?q=${meeting.Address}`
                    : meeting.URL
                }
              >
                <div className="scheduleList">
                  <div key={index} className="scheduledItem">
                    <p className="scheduledNameOnly">{meeting.Name}</p>
                    <div className="scheduledInfo">
                      {" "}
                      <p className="scheduledName UrlAddress">
                        {meeting.Address || meeting.URL}
                      </p>
                      <p className="scheduledName">{meeting.Date}</p>{" "}
                      <p className="scheduledName">{meeting.Time}</p>
                      <p className="scheduledName">{meeting.MeetingType}</p>
                    </div>
                  </div>{" "}
                </div>
              </a>
            ))}
          </>
        ) : (
          <div className="homeList">
            <p className="scheduledNone">No Unread Messages</p>
          </div>
        )}
      </div>

      <div>
        <button className="connectionsBtn">Find Connections</button>
      </div>


      <Navbar />
    </div>
  );
};

export default HomePage;
