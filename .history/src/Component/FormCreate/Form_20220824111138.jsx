import React from "react";

import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"
// import {Form, Label, FormGroup,Input, Button } from 'reactstrap'

const Forms = () => {
  return (
    <div style={{display: 'flex'}}>
      <Aside/>
     <h1> Create</h1>
     <form style={{display: 'flex'}}>
      <input type="text"/>
      <input type="text"/>
     </form>
    </div>
  );
};

export default Forms;
