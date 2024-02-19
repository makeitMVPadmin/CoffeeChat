import React from "react"
import "../SidebarHeader/Header.scss"
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import User from "../SidebarHeader/User.svg";
import { useNavigate } from "react-router-dom";
const Header = () => {

    const navigate=useNavigate()

    const handleBackArrow = () => {
        navigate('/home')
    }
     

    return (
        <div className="headerContainer">
            <div className="header">
                <div><FaArrowLeftLong size={30} className="backArrow" onClick={handleBackArrow}/></div>
                <h2 className="inboxText">Inbox</h2>
                {/* <div className="userInfo"> */}
                    <img src={User} alt="user" className="userImg"/>
                    <div><FaPlus size={30} className="plusArrow"/></div>
                {/* </div> */}
                
        </div>
        </div>
    )
}


export default Header 