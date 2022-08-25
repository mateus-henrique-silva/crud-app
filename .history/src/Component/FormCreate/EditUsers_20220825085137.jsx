import React from "react";
import Aside from "../Aside/Aside";
import { Link } from "react-router-dom";
const EditUsers = () => {
  return (
    <div style={{ display: "flex" }}>
      <Aside />
      <form className="form-create">
        <h1>EditUsers</h1>
        <input type="text" placeholder="Nome do livro"/>
        <input type="text" placeholder="Category" />
        <button type="submit">Submit</button>
        <Link to="/adminBook" style={{ backgroundColor:"black", color:"white", textDecoration: "none", padding:"4px px 3px"}}>Cancel</Link>
      </form>
    </div>
  );
};

export default EditUsers;
