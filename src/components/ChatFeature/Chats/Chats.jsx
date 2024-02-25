import React from "react";
import "./Chats.scss"
// import User from "../SidebarHeader/User.svg";
import { useNavigate } from "react-router-dom";

const Chats = ({id, messages, users}) => {

    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate(`/chat/${id}`)
    }

    const dateFormatter = (date) => {
        const truncatedDate = date.split("-")
        const month = truncatedDate[1]
        const day = truncatedDate[2].slice(0,2)
        const year = truncatedDate[0]

        return `${month}/${day}/${year}`
      }

    return(
        <div className="chats" >
            <div className="userChat" onClick={handleButtonClick}>
                    <img src={users[1].avatar} alt="user" className="userImg" />
                    <div className="userChatInfo">
                        <span>{users[1].name}</span>
                        <p>{messages[messages.length-1].content}</p>
                    </div>
                    <div className="dateTime">
                    <span>{dateFormatter(messages[messages.length-1].timestamp)}</span>
                    </div>
            </div>
        </div>
    )
}

export default Chats

