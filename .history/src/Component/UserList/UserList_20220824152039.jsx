import React,{useContext} from 'react'
import "./UserList.css"
import { Link } from "react-router-dom";
import {GlobalContext}from "../../Contexts/GlobalState"


const UserList = () => {
    const {users} = useContext(GlobalContext);
    console.log(users)
  return (
    <div style={{display: "flex", justifyContent: "center", margin:"20px", }}>
    {users.map(user=)}
    </div>
  )
}

export default UserList
