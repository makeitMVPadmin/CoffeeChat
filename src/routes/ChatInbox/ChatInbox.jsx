import React from "react"; 
import Sidebar from "../../components/ChatFeature/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"


const ChatInbox = () => {
    return(
        <div className="chatInbox">
            <div className="container">
                <Sidebar />
                <Navbar />
            </div>
        </div>
    )
}
export default ChatInbox