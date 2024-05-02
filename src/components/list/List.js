import React from "react";
import "./list.css"
import UserInfo from "./userInfo/UserInfo";
import ChatList from "./chatList/ChatList";

function List(){
    return (
        <div className="list">
           
            <ChatList></ChatList>
            <UserInfo></UserInfo>
        </div>
    )
}
export default List;