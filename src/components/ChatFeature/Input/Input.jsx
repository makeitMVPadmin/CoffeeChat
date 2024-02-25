import React, { useState } from "react";
import "./Input.scss"
import { LuSend } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";

const Input = ({ allMessages, addMessage, avatar }) => {

    const [chatInput, setChatInput] = useState('');

    const handleInput = (e) => {
        setChatInput(e.target.value)
    }

    const saveMessage = (e) => {
        if (e.key === "Enter") {
        let date = new Date()
        const newMessage = {
            id: (allMessages.length+1),
            sender: "aanders", // Primary logged in user
            avatar: avatar, // Profile pic for primary logged in user
            receiver: "rdev", // Secondary non-logged in user
            content: chatInput,
            timestamp: date.toISOString().slice(0, 19),
        }
        addMessage(newMessage)
        setChatInput('')
        }
    }

    return (
        <div className="input">
            <input 
            type="text" 
            placeholder="Type message here"
            value={chatInput}
            onChange={(e) => handleInput(e)}
            onKeyDown={(e) => saveMessage(e)}
            maxLength={250}
            />
            <div className="inputIcons">
            <LuSend size={20} className="sendButton" />
            <FaMicrophone size={20} className="talkToText" />
            </div>
        </div>
    )
}

export default Input