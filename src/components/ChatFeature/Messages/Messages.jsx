//messages sent back and forth between users

import React from "react";
// import Message from "./components/ChatFeature/Message/Message"
import Message from "../Message/Message"
import"./Messages.scss"



const Messages =({messages}) => {
    return(
        <div className="messages">
            <Message />
            {/* {Messages.map((message, index) => (
                <Message 
                key={index} 
                content={message.content} 
                sender={message.sender} />
            ))} */}
        </div>
    )
}

export default Messages