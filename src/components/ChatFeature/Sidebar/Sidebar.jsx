import React from "react";
import SidebarHeader from "../SidebarHeader/SidebarHeader"
import Chats from "../Chats/Chats"
import "./Sidebar.scss"
import Search from "../Search/Search";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarHeader />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar