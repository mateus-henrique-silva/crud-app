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
     <form cla style={{display: 'flex', flexDirection: 'column'}}>
      <input type="text"/>
      <input type="text"/>
      <button type="submit">Submit</button>
     </form>
    </div>
  );
};

export default Forms;
