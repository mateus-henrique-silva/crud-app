import React from "react";

import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"
import {Form, Label, FormGroup,} from 'reactstrap'

const Form = () => {
  return (
    <div style={{display: 'flex'}}>
      <Aside/>
     <h1> Create</h1>
    </div>
  );
};

export default Form;