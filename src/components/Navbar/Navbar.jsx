import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import homeicon from "../../assets/icons/navbar/homeicon.svg";
import chat from "../../assets/icons/navbar/chat.svg";
import calendar from "../../assets/icons/navbar/calendar.svg";
import connect from "../../assets/icons/connection/connect.png";
import logo from "../../assets/logo/Final_logo.svg";
import Calendar02 from "../../assets/icons/calendar/calendar02.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/home">
        <img className="logo" src={logo} alt="logo"/>
      </Link>

      {/* home icon on navbar */}
      <NavLink
        to="/home"
        className={(navData) =>
          navData.isActive ? "navLinksActive" : "navLinks"
        }
      >
        <div>
          <Link to="/home">
            <img className="navIcons" src={homeicon} alt="Home icon" />
          </Link>
        </div>
        <Link to="/home" className="navLink">
          Home
        </Link>
      </NavLink>


        {/* connection icon */}
      <NavLink
        to="/connections"
        className={(navData) =>
          navData.isActive ? "navLinksActive" : "navLinks"
        }
      >
        <div>
          <Link to="/connections">
            <img className="navIcons" src={connect} alt="connectionIcon" />
          </Link>
        </div>
        <Link to="/connections" className="navLink">
          Connect
        </Link>
      </NavLink>

      {/* chat icon */}
      <NavLink
        to="/inbox"
        className={(navData) =>
          navData.isActive ? "navLinksActive" : "navLinks"
        }
      >
        <div>
          <Link to="/inbox">
            <img className="navIcons" src={chat} alt="Chat Icon" />
          </Link>
        </div>
        <Link to="/inbox" className="navLink">
          Chat
        </Link>
      </NavLink>

      {/* calendar icon */}
      <NavLink
        to="/bookings"
        className={(navData) =>
          navData.isActive ? "navLinksActive" : "navLinks"
        }
      >
        <div>
          <Link to="/bookings">
            <img className="navIcons" src={Calendar02} alt="Calendar Icon" />
          </Link>
        </div>
        <Link to="/bookings" className="navLink">
          Calendar
        </Link>
      </NavLink>

    </div>
  );
};

export default Navbar;
