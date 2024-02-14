import React from "react"
import "./Header.scss"
import { FaArrowLeftLong } from "react-icons/fa6";
import User from "../SidebarHeader/User.svg";
const Header = () => {
    return (
        <div className="headerContainer">
            <div className="backButton">
                {/* <img src="#" alt="back">Back</img> */}
                <FaArrowLeftLong size={35}/>
            </div>
            <div className="header">
            <h2>Inbox</h2>
            <div className='sidebar'>
                <ul className='sidebarList'>
                    <img src={User} alt="user" />
                    <div className="textSide">
                        <h2 className="chaterName">Name</h2>
                        <p className="chatContent">
                        Lorem ipsum of characters 
                        for text preview
                        </p>
                    </div>
                    <p className="chatDate">
                        date/time
                    </p>
                </ul>

                <hr />
            </div>
            <div className='sidebar'>
                <ul className='sidebarList'>
                    <img src={User} alt="user" />
                    <div className="textSide">
                        <h2 className="chaterName">Name</h2>
                        <p className="chatContent">
                        Lorem ipsum of characters 
                        for text preview
                        </p>
                    </div>
                    <p className="chatDate">
                        date/time
                    </p>
                </ul>

                <hr />
            </div>
            <div className='sidebar'>
                <ul className='sidebarList'>
                    <img src={User} alt="user" />
                    <div className="textSide">
                        <h2 className="chaterName">Name</h2>
                        <p className="chatContent">
                        Lorem ipsum of characters 
                        for text preview
                        </p>
                    </div>
                    <p className="chatDate">
                        date/time
                    </p>
                </ul>

                <hr />
            </div>
            <UsersOnline />
            </div>
        </div>
    )
}

const UsersOnline = () => {
    return(
        <div className="userListContainer">
            <div className="users">
                <img src="#" alt="/"/>
                <span></span> 
            </div>
        </div>
    )
}

export default Header