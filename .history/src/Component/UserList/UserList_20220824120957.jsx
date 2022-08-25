import React from 'react'
import "./UserList.css"
import { Link } from "react-router-dom";


const UserList = () => {
  return (
    <>
     <div>
        <strong>User one</strong>
        <Link to="/edit">Edit</Link>
     </div>
    </>
  )
}

export default UserList
