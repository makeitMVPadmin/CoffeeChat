//messages sent back and forth between users

import React from "react";
// import Message from "./components/ChatFeature/Message/Message"
import Message from "../Message/Message"
import"./Messages.scss"



const Messages =({messages}) => {
    

    const messagesList = messages.map((message) => {
        return(
            <Message 
            key={message.id} 
            content={message.content} 
            sender={message.sender} 
            userImg={message.avatar}
            />
            )
    })
        
        

    return(
        <div className="messages">
            {messagesList}
        </div>
    )
}

export default Messages