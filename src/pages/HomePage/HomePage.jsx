import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { app } from "../../App";
import { getAuth, signOut } from "firebase/auth";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const auth = getAuth(app);

  const eventDate = () => {
    const date = new Date();
    return date.getDay();
  };

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
          Welcome, <br></br> name!
        </h1>
        <div className="accountBtn"></div>
      </div>

      {/* <h4 className="upcomingEventTitle">Upcoming Events</h4> */}

      {/* <Carousel
        showStatus={false}
        showThumbs={false}
        centerMode={true}
        showArrows={false}
        centerSlidePercentage={80}
        infiniteLoop
        // autoPlay
        autoFocus
        showIndicators={false}

      //this will be mapped 
      >
        <div className="carouselItem">
          <div className="carouselDetail">
            <h3>event title</h3>
            <p>lorem ipsum asdfe asdfeadsf asdfasdjf</p>
          </div>
          <div className="eventTimer">day hour min sec</div>
          <img className="imgCarousel" src="https://images.pexels.com/photos/15104206/pexels-photo-15104206/free-photo-of-a-siberian-husky-lying-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Slide 1" />
        </div>

        <div className="carouselItem">
          <img className="imgCarousel" src="https://images.pexels.com/photos/15104206/pexels-photo-15104206/free-photo-of-a-siberian-husky-lying-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Slide 2" />
        </div>

        <div className="carouselItem">
          <img className="imgCarousel" src="https://images.pexels.com/photos/15104206/pexels-photo-15104206/free-photo-of-a-siberian-husky-lying-on-the-floor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Slide 3" />
        </div>
      </Carousel>
 */}

      <h3 className="scheduleTitle">Schedule</h3>

      <div className="scheduleDiv">
        <div className="scheduleList">
          <p className="scheduledName">Richard Yin</p>
          <p>October 17 4:30pm (virtual)</p>
        </div>

        <div className="scheduleList">
          <p className="scheduledName">Richard Yin</p>
          <p>October 17 4:30pm (virtual)</p>
        </div>
        <div className="scheduleList">
          <p className="scheduledName">Richard Yin</p>
          <p>October 17 4:30pm (virtual)</p>
        </div>
        <div className="scheduleList">
          <p className="scheduledName">Richard Yin</p>
          <p>October 17 4:30pm (virtual)</p>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default HomePage;
