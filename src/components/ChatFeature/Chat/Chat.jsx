//where messages are sent back and forth

import React from "react";
// import Messages from "./components/ChatFeature/Messages/Messages"
import Messages from "../Messages/Messages"
import Input from "../Input/Input"
import "./Chat.scss"

const Chat =() => {
    return(
    <div className="chat">
        <div className="chatInfo">
            <div className="backIcon">
                <img src="#" alt="back icon" />
            </div>
            <div className="userInfo">
                <img src="#" alt="profile pic" />
                <span>Jane</span>
                <span>Occupation</span>
            </div>
        </div>
    <Messages />
    <Input />
    </div>
    )
}

export default Chat