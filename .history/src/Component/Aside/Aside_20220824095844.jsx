import React from "react";
import "./Aside.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminLivros from "../../Pages/Admin/AdminLivros/AdminLivros";
const Aside = () => {
  return (
    <div className="aside-end">
      <aside>
        <h1>Biblioteca Online</h1>
        <Link to="/adminBook">Livros</Link>
          <Link to="/">Usuarios</Link>
          <Link to="/">Reservas</Link>
     
      </aside>
    </div>
  );
};

export default Aside;
