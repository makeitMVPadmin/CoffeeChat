//for single messages sent back and forth

import React from "react";
import "./Message.scss"
import User from "../SidebarHeader/User.svg";

const Message =() => {
    return(
        // classname to determine style for classname. change once data is added
        // <div className={`message ${message.sender === 'user1' ? 'owner' : ''}`}>
        <div className="message owner">
            <div className="messageInfo">
            <div className="userPic">
                <img src={User} alt="profile pic" /></div>
            </div>
            <div className="messageContent">
                <p>Add message content here</p>
            </div>
        </div>  
    )
}

export default Message