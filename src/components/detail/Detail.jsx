import React from "react";
import "./detail.css"


function Detail() {
    return (
        <div className="detail">
            <div className="user">
                <img src="./image/images.png" alt="" />
                <h2>Van Quyet</h2>
                <p>Xin chao moi người nha</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Setting</span>
                        <img src="./image/len.svg" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy % Help</span>
                        <img src="./image/len.svg" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Share Photo</span>
                        <img src="./image/xuong.svg" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./image/images.png" alt="" />
                                <span>photo 2024</span>
                            </div>
                            <img src="./image/download.svg" alt=""  className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./image/images.png" alt="" />
                                <span>photo 2022</span>
                            </div>
                            <img src="./image/download.svg" alt=""    className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./image/images.png" alt="" />
                                <span>photo 2021</span>
                            </div>
                            <img src="./image/download.svg" alt=""    className="icon"/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="./image/images.png" alt="" />
                                <span>photo 2021</span>
                            </div>
                            <img src="./image/download.svg" alt=""    className="icon"/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Share Files</span>
                        <img src="./image/len.svg" alt="" />
                    </div>
                </div>
                <button>Block User</button>
                <button className="logOut" >LogOut</button>

            </div>
        </div>
    )
}
export default Detail;