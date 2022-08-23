import React from "react";
import './Aside.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminLivros from "../../Component/"
const Aside = () => {
  return (
    <div className="aside-end">
      <aside>
        <h1>Biblioteca Online</h1>
        <Router>
        <Routes>
        <Route exact path="/admin" element={<Admin />} />
          <Route exact element={<Sign />} path="/" />
          <Route element={<Sign />} path="*" />
        </Routes>
   
        <Link to="/">Livros</Link>
        <Link to="/">Usuarios</Link>
        <Link to="/">Reservas</Link>
        </Router>
      </aside>
    </div>
  );
};

export default Aside;
