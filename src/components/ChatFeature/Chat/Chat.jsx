//where messages are sent back and forth

import React from "react";
// import Messages from "./components/ChatFeature/Messages/Messages"
import Messages from "../Messages/Messages"
import Input from "../Input/Input"
import "./Chat.scss"
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import User from "../SidebarHeader/User.svg";


const Chat =() => {

    const navigate=useNavigate()

    const handleBackArrowChat = () => {
        navigate('/inbox')
    }

    return(
    <div className="chat">
        <div className="chatHeader">
             <div className="colOne">
            <FaArrowLeftLong size={30} className="backIcon" onClick={handleBackArrowChat} />
            </div>
            <div className="colTwo">
               <img className="userTwoImg" src={User} alt="profile pic" />
                <span className="userName">Jane</span>
                <span className="userOccupation">Software Engineer</span> 
            </div>
        </div>
    <Messages />
    <Input />
    </div>
    )
}

export default Chat