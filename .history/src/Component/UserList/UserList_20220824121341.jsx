import React from 'react'
import "./UserList.css"
import { Link } from "react-router-dom";


const UserList = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", margin:"20px", padding:"20px ",}}>
     <div className="list-user">
        <strong>User one</strong>
        <Link to="/edit">Edit</Link>
        <button>Delete</button>
     </div>
    </div>
  )
}

export default UserList
