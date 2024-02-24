//where messages are sent back and forth

import React from "react";
// import Messages from "./components/ChatFeature/Messages/Messages"
import Messages from "../Messages/Messages"
import Input from "../Input/Input"
import "./Chat.scss"
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import User from "../SidebarHeader/User.svg";
import ChatData from "../../../data/chatData"


const Chat =() => {
    const {users, messages} = ChatData

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
               <img className="userTwoImg" src={users[1].avatar} alt="profile pic" />
                <span className="userName">{users[1].name}</span>
                <span className="userOccupation">{users[1].occupation}</span> 
            </div>
        </div>
    <Messages messages={messages} /> {/*passing the messages prop to messages component*/}
    <Input />
    </div>
    )
}

export default Chat