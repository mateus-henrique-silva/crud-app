import React from "react";
import "./Form.css"
import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"
// import {Form, Label, FormGroup,Input, Button } from 'reactstrap'

const Forms = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Aside/>
     <h1> Create</h1>
     <form className="form-create" >
      <input type="text"/>
      <input type="text"/>
      <button type="submit">Submit</button>
     </form>
    </div>
  );
};

export default Forms;
