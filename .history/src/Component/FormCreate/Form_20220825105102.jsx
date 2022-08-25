import React,{useContext, useState} from "react";
import "./Form.css"
import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"
import { Link,  useNavigate } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalState";
// import {Form, Label, FormGroup,Input, Button } from 'reactstrap'

const Forms = () => {
  const [name, setName]=useState("");
  const [category, setCategory]=useState("");
  const {addUser} = useContext(GlobalContext);
  const navigate= useNavigate();
  const onSubmit = ()=>{
    const newUser = {
      id:4,
      name:"user 4",
      category:"Romance"
      
    }
    addUser(newUser)
    navigate('/adminBook');
  }
  return (
    <div style={{display: 'flex'}}>
      <Aside/>
    
     <form className="form-create" onSubmit={onSubmit} >
     <h1> Create</h1>
      <input type="text" value={name} onChange={(e)=>{
        setName(e.target.value);
      }} placeholder="Nome do Livro"/>
      <input type="text" value={category} placeholder="category"/>
   
      <button type="submit">Submit</button>
      <Link to="/adminBook">Cancel</Link>
     </form>
    </div>
  );
};

export default Forms;
