import React from 'react'
import "./Admin.css"
import Aside from "../../Component/Aside/Aside"
import Form from "../../Component/FormCreate/Form"

const Admin = () => {
  return (
    <div style={{display: 'flex',}}>
       <Aside/>
       
       <Form/>
    </div>
  )
}

export default Admin