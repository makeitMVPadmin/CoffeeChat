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
        <header className="welcome-header">
            <div className="welcome-navbar-logo">
                <img src={Logo} />
                <h2 id="logo">Coffee Chat</h2>
            </div>
            <nav ref={navRef}>
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#FAQs">FAQs</a>
                <a href="#testimonials">Testimonials</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
                
            </nav>
            <div className="sign">
            <button className="sign-btn">
                    Sign In
            </button>
            <button className="sign-btn">
                    Sign Up
            </button>
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                    <FaBars />
                </button>
            
        </header>
    );
}

export default WelcomeNavBar;