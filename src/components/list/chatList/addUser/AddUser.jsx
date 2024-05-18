import './addUser.css'

function AddUser(){
    return (
        <div className="addUser">
           <form action="">

            <input type="text" name="username" placeholder='username' />
            <button>Search</button>
           </form>
           <div className="user">
            <div className="detail">
                <img src="./image/images.png" alt="" />
                <span>Jande Doe</span>
            </div>
            <button>Add User</button>
           </div>
        </div>
    )
}

export default AddUser;