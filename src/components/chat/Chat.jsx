import React, { useEffect, useRef, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";

function Chat() {
    const [openIcon, setOpenIcon] = useState(false);
    const [text, setText] = useState("")
    const endRef = useRef(null)
    useEffect(()=>{
          endRef.current?.scrollIntoView({behavior: "smooth"})
    },[])
    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);
        setOpenIcon(false)
    }

   
    return (
        <div className="chat">
            <div className="top">
                <div className="user ">
                    <img src="./image/images.png" className="hinhanh" alt="" />
                    <div className="texts">
                        <span>vanquyet</span>
                        <p>Hello</p>
                    </div>
                </div>

                <div className="icons" >
                    <img src="./image/edit.svg" alt="" />
                    <img src="./image/call.svg" alt="" />
                    <img src="./image/menu.svg" alt="" />
                </div>

            </div>
            <div className="center">

                <div className="message1">
                    <img src="./image/images.png" alt="" />
                    <div className="texts">
                        <p> React real-time chat application using Firebase. React chat app project.
                            Get Hostinger Discount: https://hostinger.com/lamadev Coupon Code: LAMADEV </p>
                        <span>1 mín ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./image/images.png" alt="" />
                    <div className="texts">
                        <p> React real-time chat application using Firebase. React chat app project.
                            Get Hostinger Discount: https://hostinger.com/lamadev Coupon Code: LAMADEV </p>
                        <span>1 mín ago</span>
                    </div>
                </div>
                <div className="message1">
                    <div className="texts">
                        <p> React real-time chat application using Firebase. React chat app project.
                            Get Hostinger Discount: https://hostinger.com/lamadev Coupon Code: LAMADEV </p>
                        <span>1 mín ago</span>
                    </div>
                </div>
                <div ref={endRef} ></div>
                <div className="message">
                    <img src="./image/images.png" alt="" />
                    <div className="texts">
                        <p> React real-time chat application using Firebase. React chat app project.
                            Get Hostinger Discount: https://hostinger.com/lamadev Coupon Code: LAMADEV </p>
                        <span>1 mín ago</span>
                    </div>
                </div>
                <div className="message1">
                    <div className="texts">
                        <img src="./image/images.png" alt="" />
                        <p> React real-time chat application using Firebase. React chat app project.
                            Get Hostinger Discount: https://hostinger.com/lamadev Coupon Code: LAMADEV </p>
                        <span>1 mín ago</span>
                    </div>
                </div>
                
            </div>
            <div className="botton">
                <div className="icons">
                    <img src="./image/image-solid.svg" alt="" />
                    <img src="./image/camera.svg" alt="" />
                    <img src="./image/mic.svg" alt="" />
                </div>
                <input type="text" placeholder="type a message..?" value={text} onChange={(e) => setText(e.target.value)} />
                <div className="emoji">
                    <img src="./image/Happy.png" alt="" onClick={() => setOpenIcon((prev) => !prev)} />
                    <div className="picker">
                        <EmojiPicker open={openIcon} onEmojiClick={handleEmoji} />
                    </div>
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}
export default Chat;