import React from "react";
import "./Form.css"
import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"
import { Link } from "react-router-dom";
// import {Form, Label, FormGroup,Input, Button } from 'reactstrap'

const Forms = () => {
  return (
    <div style={{display: 'flex'}}>
      <Aside/>
    
     <form className="form-create" >
     <h1> Create</h1>
      <input type="text"/>
      <input type="text"/>
      <button type="submit">Submit</button>
      <Link to="/">Cancel</Link>
     </form>
    </div>
  );
};

export default Forms;
