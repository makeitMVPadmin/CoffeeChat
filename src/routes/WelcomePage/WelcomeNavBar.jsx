import {FaBars, FaTimes} from "react-icons/fa";
import { useRef } from "react";
import './WelcomeNavBar.scss';
import Logo from './logo.svg';
function WelcomeNavBar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <div>
                <img src={Logo} />
                <h2 id="logo">Coffee Chat</h2>
            </div>
            <nav ref={navRef}>
                <a href="/#">About</a>
                <a href="/#">Features</a>
                <a href="/#">FAQs</a>
                <a href="/#">Testimonials</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
        </header>
    );
}

export default WelcomeNavBar;