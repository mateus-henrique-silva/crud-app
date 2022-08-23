import React from "react";
import './Aside.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Aside = () => {
  return (
    <div>
      <aside>
        <Link to="/">Livros</Link>
        <Link to="/">Usuarios</Link>
        <Link to="/">Reservas</Link>
      </aside>
    </>
  );
};

export default Aside;