import React from "react";
import "./Aside.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AdminLivros from "../../Pages/Admin/AdminLivros/AdminLivros";
const Aside = () => {
  return (
    <div className="aside-end">
      <aside>
        <h1>Biblioteca Online</h1>
        <Router>
          <Link to="/adminBook">Livros</Link>
          <Link to="/">Usuarios</Link>
          <Link to="/">Reservas</Link>
          <Routes>
            <Route exact path="/adminBook" element={<AdminLivros />} />
            {/* <Route exact element={<Sign />} path="/" />
          <Route element={<Sign />} path="*" /> */}
          </Routes>
        </Router>
      </aside>
    </div>
  );
};

export default Aside;
