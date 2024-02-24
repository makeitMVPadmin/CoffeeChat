import React from "react";
import SidebarHeader from "../SidebarHeader/SidebarHeader"
import Chats from "../Chats/Chats"
import "./Sidebar.scss"
import Search from "../Search/Search";
import chatData from "../../../data/chatData"

const Sidebar = () => {
    const {chatRooms, users} = chatData
    {/*this pulls the chat data to store in the inbox*/}

    const chatsRoomsList = chatRooms.map(room => {
        const {id, messages, users} = room
        return (
            <Chats
                id={id}
                messages={messages}
                users={users}
            />
        )
    })

    return (
        <div className="sidebar">
            <SidebarHeader users={users} />
            <Search />
            {chatsRoomsList}
        </div>
    )
}

export default Sidebar