//page where the chat feature will live

import React from "react"; 
import Chat from "../../components/ChatFeature/Chat/Chat"
import Navbar from "../../components/Navbar/Navbar"

const ChatPage = () => {
    return(
        <div className="chatPage">
            <div className="container">
                <Chat />
                <Navbar />
            </div>
        </div>
    )
}
export default ChatPage



