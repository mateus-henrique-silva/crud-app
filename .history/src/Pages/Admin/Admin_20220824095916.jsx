import React from 'react'
import "./Admin.css"
import Aside from "../../Component/Aside/Aside"
import AdminLivros from "../../Pages/Admin/AdminLivros/AdminLivros";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
       <Aside/>
       <Router>
    

    <Route exact path="/adminBook" element={<AdminLivros />} />
    {/* <Route exact element={<Sign />} path="/" />
    <Route element={<Sign />} path="*" /> */}
  </Router>
    </div>
  )
}

export default Admin