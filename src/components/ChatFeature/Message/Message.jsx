//for single messages sent back and forth

import React from "react";
import "./Message.scss"
import User from "../SidebarHeader/User.svg";

const Message =({key, content, sender, userImg}) => {
    return(
        // classname to determine style for classname. change once data is added
        <div key={key} className={`message ${sender === 'aanders' ? 'owner' : ''}`}>
            <div className="messageInfo">
                <div className="userPic">
                    <img src={userImg} alt="profile pic" /></div>
                </div>
                <div className="messageContent">
                    <p>{content}</p>
            </div>
        </div>  
    )
}

export default Message