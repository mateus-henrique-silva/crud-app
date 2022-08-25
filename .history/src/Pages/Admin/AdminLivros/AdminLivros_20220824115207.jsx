import React from "react";
import Aside from "../../../Component/Aside/Aside";
import "./AdminLivros.css";
import { Link } from "react-router-dom";
import UserList from "../../../Component/UserList/UserList";
const AdminLivros = () => {
  return (
    <div style={{ display: "flex", }}>
      <Aside />
      <div></div>
      <div className="link-button-add">
        <Link to="/form">Add Livros</Link>
      </div>
      <UserList />
    </div>
  );
};

export default AdminLivros;
