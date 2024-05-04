import React from "react";
import "./userInfo.css"


function UserInfo() {
    return (
        <>
            <div className="userInfo">
                <div className="user"
                >
                    <img className="imgaeInfo" src="./image/images.png" alt="" />
                    <h2>van quyet</h2>
                </div>

                <div className="icons" >
                    <img src="./image/edit.svg" alt="" />
                    <img src="./image/call.svg" alt="" />
                    <img src="./image/menu.svg" alt="" />
                </div>
            </div>
        </>
    )
}
export default UserInfo;