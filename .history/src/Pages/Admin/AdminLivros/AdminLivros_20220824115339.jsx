import React from "react";
import Aside from "../../../Component/Aside/Aside";
import "./AdminLivros.css";
import { Link } from "react-router-dom";
import UserList from "../../../Component/UserList/UserList";
const AdminLivros = () => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Aside />
      <div style={{ display: ""}}>
      <div className="link-button-add">
        <Link to="/form">Add Livros</Link>
      </div>
      <UserList />
      </div>
    </div>
  );
};

export default AdminLivros;
