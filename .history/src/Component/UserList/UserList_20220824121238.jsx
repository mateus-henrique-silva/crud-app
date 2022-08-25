import React from 'react'
import "./UserList.css"
import { Link } from "react-router-dom";


const UserList = () => {
  return (
    <div style={{dsipl}}>
     <div className="list-user">
        <strong>User one</strong>
        <Link to="/edit">Edit</Link>
        <button>Delete</button>
     </div>
    </div>
  )
}

export default UserList
