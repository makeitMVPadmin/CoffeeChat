import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";
import homeicon from "../../assets/icons/navbar/homeicon.svg";
import chat from "../../assets/icons/navbar/chat.svg";
import calendar from "../../assets/icons/navbar/calendar.svg";
import user from "../../assets/icons/navbar/user.svg";
import logo from "../../assets/logo/Final_logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="logo" to="/home">
        <img className="logo" src={logo} />
      </Link>
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

      <NavLink
        to="/connections"
        className={(navData) =>
          navData.isActive ? "navLinksActive" : "navLinks"
        }
      >
        <div>
          <Link to="/connections">
            <img className="navIcons" src={chat} alt="Chat Icon" />
          </Link>
        </div>
        <Link to="/connections" className="navLink">
          Connect
        </Link>
      </NavLink>

      <NavLink
        to="/profile"
        className={(navData) =>
          navData.isActive ? "navLinksActive" : "navLinks"
        }
      >
        <div>
          <Link to="/profile">
            <img className="navIcons" src={user} alt="User Icon" />
          </Link>
        </div>
        <Link to="/profile" className="navLink">
          Profile
        </Link>
      </NavLink>
    </div>
  );
};

export default Navbar;
