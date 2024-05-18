import { toast } from "react-toastify";
import "./login.css";   
import React, { useState } from "react"; // Thêm useState vào import

function Login() {

    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    const handleAvatar = (e) => { // Thêm tham số e vào hàm handleAvatar

        if(e.target.files[0]){

            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }
    const handleSubmit =(e)=>{
         e.preventDefault();
         toast.success("lo ccc");
    }

    return (
        <div className="login">
            <div className="item">
                <h2>Welcome Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" /> 
                    <button type="submit">Login</button> 
                </form>
            </div>
           
            <div className="separator"></div>   
            
            <div className="item">
                <h2>Create An Account</h2>
                <form action="" >
                    <label htmlFor="file">Upload an Image</label>
                    <img src={avatar.url || "./image/images.png"} alt="" />
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="userName" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" /> 
                    <button type="submit">Create Account</button> 
                </form>
            </div>
        </div>
    );
}
            
export default Login;
