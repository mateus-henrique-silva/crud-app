import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Aside = () => {
  return (
    <>
      <aside>
        {/* <Link to="/"></Link>
            <Link to="/"></Link>
            <Link to="/"></Link> */}

        <a>Reservados</a>
        <a>Usuarios</a>
        <a>Livros</a>
      </aside>
    </>
  );
};

export default Aside;
