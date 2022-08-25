import React from "react";
import Aside from "../../../Component/Aside/Aside";
import Link from "react-router"
const AdminLivros = () => {
  return (
    <div>
      <Aside />
      <Link to="/">Add Livros</Link>
    </div>
  );
};

export default AdminLivros;
