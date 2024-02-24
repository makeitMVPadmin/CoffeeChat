import React from "react";
import SidebarHeader from "../SidebarHeader/SidebarHeader"
import Chats from "../Chats/Chats"
import "./Sidebar.scss"
import Search from "../Search/Search";
import chatData from "../../../data/chatData"

const Sidebar = () => {
    const {chats} = chatData
    {/*this pulls the chat data to store in the inbox*/}

    return (
        <div className="sidebar">
            <SidebarHeader />
            <Search />
            <Chats />
            
            
        </div>
    )
}

export default Sidebar