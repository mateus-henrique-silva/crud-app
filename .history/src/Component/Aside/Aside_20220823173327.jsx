import React from "react";
import './Aside.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Aside = () => {
  return (
    <div className="aside-end">
      <aside>
        <h1>L</h1>
        <Link to="/">Livros</Link>
        <Link to="/">Usuarios</Link>
        <Link to="/">Reservas</Link>
      </aside>
    </div>
  );
};

export default Aside;
