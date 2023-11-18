import "./Navbar.scss";
import { Link } from "react-router-dom";
import homeicon from '../../assets/icons/navbar/homeicon.svg'
import chat from '../../assets/icons/navbar/chat.svg'
import calendar from '../../assets/icons/navbar/calendar.svg'
import user from '../../assets/icons/navbar/User.svg'


const Navbar = () => {
  return (
    <div className="navbar">

      <div>
        <div><Link to="/"><img className="navIcons" src={homeicon} alt="Home icon"/></Link></div>
        <Link to="/" className="navLink">Home</Link>
      </div>

      <div>
        <div><Link to="/"><img className="navIcons" src={chat} alt="Chat Icon" /></Link></div>
        <Link to="/connections" className="navLink">Connections</Link>
      </div>

      <div>
        <div><Link to="/"><img className="navIcons" src={calendar} alt="Calender Icon" /></Link></div>
        <Link to="/calendar" className="navLink">Calendar</Link>
      </div>

      <div>
        <div><Link to="/"><img className="navIcons" src={user} alt="User Icon"/></Link></div>
        <Link to="/profile" className="navLink">Profile</Link>
      </div>

    </div>
  );
};

export default Navbar;
