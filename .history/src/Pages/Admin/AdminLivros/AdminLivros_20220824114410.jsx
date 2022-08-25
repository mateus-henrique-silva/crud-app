import React from "react";
import Aside from "../../../Component/Aside/Aside";
import { Link } from "react-router-dom";
const AdminLivros = () => {
  return (
    <div style={{display: 'flex',}}>
      <Aside />
      <div className="link-button-add">
      <Link to="/form">Add Livros</Link>
      </div>
    </div>
  );
};

export default AdminLivros;
