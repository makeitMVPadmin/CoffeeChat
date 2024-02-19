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
        <div className="chatInfo">
             <div>
            <FaArrowLeftLong size={30} className="backIcon" onClick={handleBackArrowChat} />
            </div>
            <div className="userInfo">
                <div className="userPic"><img src={User} alt="profile pic" /></div>
                <span>Jane</span>
                <span>Occupation</span>
            </div>
        </div>
    <Messages />
    <Input />
    </div>
    )
}

export default Chat