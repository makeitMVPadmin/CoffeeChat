import "./Navbar.scss";
import { Link } from "react-router-dom";
import home from '../../assets/icons/navbar/home.svg'
import chat from '../../assets/icons/navbar/chat.svg'
import calendar from '../../assets/icons/navbar/calendar.svg'
import user from '../../assets/icons/navbar/user.svg'


const Navbar = () => {
  return (
    <div className="navbar">

      <div>
        <div><Link to="/"><img className="navIcons" src={home} /></Link></div>
        <Link to="/" className="navLink">Home</Link>
      </div>

      <div>
        <div><Link to="/"><img className="navIcons" src={chat} /></Link></div>
        <Link to="/connections" className="navLink">Connections</Link>
      </div>

      <div>
        <div><Link to="/"><img className="navIcons" src={calendar} /></Link></div>
        <Link to="/calendar" className="navLink">Calendar</Link>
      </div>

      <div>
        <div><Link to="/"><img className="navIcons" src={user} /></Link></div>
        <Link to="/profile" className="navLink">Profile</Link>
      </div>

    </div>
  );
};

export default Navbar;
