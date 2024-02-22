//for single messages sent back and forth

import React from "react";
import "./Message.scss"
import User from "../SidebarHeader/User.svg";

const Message =() => {
    return(
        <div className="message owner">
            <div className="messageInfo">
            <div className="userPic">
                <img src={User} alt="profile pic" /></div>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                {/* for photo attachment */}
                {/* <img src="#" alt="image" /> */}
            </div>
        </div>  
    )
}

export default Message