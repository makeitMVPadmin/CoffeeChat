import React from "react";
import "./Chats.scss"
import User from "../SidebarHeader/User.svg";
import { useNavigate } from "react-router-dom";

const Chats =() => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/chat')
    }
    return(
        <div className="chats" >
            <div className="userChat" onClick={handleButtonClick}>
                    <img src={User} alt="user" className="userImg" />
                    <div className="userChatInfo">
                        <span>Jane</span>
                        <p>Look forward to meeting you!</p>
                    </div>
                    <div className="dateTime">
                    <span>12/2/24</span>
                    </div>
            </div>
        </div>
    )
}

export default Chats

