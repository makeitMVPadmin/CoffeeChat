import React from "react"
import "./SidebarHeader.scss"
import { FaArrowLeftLong } from "react-icons/fa6";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="backButton">
                {/* <img src="#" alt="back">Back</img> */}
                <FaArrowLeftLong size={35}/>
            </div>
            <div className="header">
            <h2>Inbox</h2>
            <UsersOnline />
            </div>
        </div>
    )
}

const UsersOnline = () => {
    return(
        <div className="userListContainer">
            <div className="users">
                <img src="#" alt="#"/>
                <span></span> 
            </div>
        </div>
    )
}

export default Header