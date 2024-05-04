import React from "react";
import "./chatList.css"


function ChatList(){
    return (
        <div className="chatlist">
           <div className="search">
            <div className="seacrchBar">
                <img src="./image/search.svg" alt="" />
                <input type="text" placeholder="Search"/>
            </div>
            <img src="./image/plus.svg" alt="" />
           </div>
        </div>
    )
}
export default ChatList;