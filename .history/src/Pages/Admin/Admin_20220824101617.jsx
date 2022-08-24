import React from 'react'
import "./Admin.css"
import Aside from "../../Component/Aside/Aside"
import Form from "../../Component/FormCreate/Form"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div style={{display: 'flex',}}>
       <Aside/>
       
        <W
        <Route exact path="/adminBook" element={<Form/>} />
        
        
        </W
    
    </div>
  )
}

export default Admin