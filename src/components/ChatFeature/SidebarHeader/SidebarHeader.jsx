import React from "react"
import "../SidebarHeader/SidebarHeader.scss"
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import User from "../SidebarHeader/User.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {

    const navigate=useNavigate()

    const handleBackArrowSidebar = () => {
        navigate('/home')
    }
     

    return (
        <div className="headerContainer">
            <div className="columnOne">
                <FaArrowLeftLong className="backArrow" size={30} onClick={handleBackArrowSidebar}/>
            </div>
            <div className="columnTwo">
                <h2>Inbox</h2>
            </div>
            <div className="columnThree">
                <img src={User} alt="user" className="userImg"/>
                <div><FaPlus size={30} className="addButton"/></div>
            </div>
        </div>
    )
}


export default Header 