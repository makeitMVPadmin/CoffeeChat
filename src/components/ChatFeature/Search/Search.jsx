import React from "react"
import { IoMdSearch } from "react-icons/io";
import "../Search/Search.scss"

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm">
                <input 
                type="text"
                placeholder= "Search chats"
                className="searchInput" />
                <IoMdSearch size={25}className="searchIcon"/>
            </div>
            <div className="messagesInfo">
                <span className="messagesText">Messages</span>
                <span className="requestsText">0 Requests</span>
            </div>
            
        </div>
        
    )
}

export default Search