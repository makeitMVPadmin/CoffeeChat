import React from "react";
import SidebarHeader from "../SidebarHeader/Header"
import Chats from "../Chats/Chats"
import "./Sidebar.scss"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarHeader />
            <Chats />
        </div>
    )
}

export default Sidebar