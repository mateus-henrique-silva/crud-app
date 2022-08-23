import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const Aside = () => {
  return (
    <>
      <aside>
        {/**/}

        <Link to="/">Livros</Link>
        <Link to="/">Usuarios</Link>
        <Link to="/">Reservas</Link>
      </aside>
    </>
  );
};

export default Aside;
