//messages sent back and forth between users

import React from "react";
// import Message from "./components/ChatFeature/Message/Message"
import Message from "../Message/Message"
import"./Messages.scss"

const Messages =() => {
    return(
        <div className="messages">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            
            
        </div>
    )
}

export default Messages