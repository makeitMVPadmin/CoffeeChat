//page where the chat feature will live

import React from "react"; 
import Chat from "../../components/ChatFeature/Chat/Chat"
import Sidebar from "../../components/ChatFeature/Sidebar/Sidebar"
import "./ChatPage.scss"

const ChatPage = () => {
    return(
        <div className="home">
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}
export default ChatPage



