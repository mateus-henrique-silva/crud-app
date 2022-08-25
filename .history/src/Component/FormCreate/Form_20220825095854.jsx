import React,{useContext} from "react";
import "./Form.css"
import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalState";
// import {Form, Label, FormGroup,Input, Button } from 'reactstrap'

const Forms = () => {
  const {addUser} = useContext(GlobalContext);
  const history = useHistory(""
  );
  const onSubmit = ()=>{

  }
  return (
    <div style={{display: 'flex'}}>
      <Aside/>
    
     <form className="form-create" onSubmit={onSubmit} >
     <h1> Create</h1>
      <input type="text" placeholder="Nome do Livro"/>
      <input type="text" placeholder="category"/>
   
      <button type="submit">Submit</button>
      <Link to="/adminBook">Cancel</Link>
     </form>
    </div>
  );
};

export default Forms;
