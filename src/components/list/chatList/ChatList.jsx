import React, { useState } from "react";
import "./chatList.css"
import AddUser from "./addUser/AddUser";


function ChatList(){
    const [showPlus,setShowPlus]  = useState(false);
    return (
        <div className="chatlist">
           <div className="search">
            <div className="seacrchBar">
                <img src="./image/search.svg" alt="" />
                <input type="text" placeholder="Search"/>
            </div>
            <img src={showPlus ? "./image/dautru.svg" : "./image/plus.svg" } alt="" className="add" 
              onClick={()=> setShowPlus((prev) => !prev)}
            />
           </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
         <div className="item">
            <img src="./image/images.png" alt="" />
            <div className="text">
            <span >Van quyet</span>
            <p>Hello</p>
            </div>
         </div>
          {showPlus && <AddUser/>}
         
        </div>
    )
}
export default ChatList;