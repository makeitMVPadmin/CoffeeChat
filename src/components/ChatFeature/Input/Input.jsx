import React from "react";
import "./Input.scss"
import { LuSend } from "react-icons/lu";
import { FaMicrophone } from "react-icons/fa";

const Input =() => {
    return(
        <div className="input">
            <input 
            type="text" 
            placeholder="Type message here"
            />
            <div className="inputIcons">
            <LuSend size={20} className="sendButton" />
            <FaMicrophone size={20} className="talkToText" />
            </div>
           
            
            
        </div>
    )
}

export default Input