import React from 'react'
import "./UserList.css"
import { Link } from "react-router-dom";


const UserList = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", margin:"20px", }}>
     <div className="list-user">
        <strong>User one</strong>
        <div className="flex-btn">
        <Link to="/edit/:id">Edit</Link>
        <button>Delete</button>
        </div>
     </div>
    </div>
  )
}

export default UserList
