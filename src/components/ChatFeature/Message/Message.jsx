//for single messages sent back and forth

import React from "react";
import "./Message.scss"

const Message =() => {
    return(
        <div className="message owner">
            <div className="messageInfo">
                <img src="#" alt="user" />
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