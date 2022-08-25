import React from "react";
import Aside from "../Aside/Aside";
const EditUsers = () => {
  return (
    <div style={{ display: "flex" }}>
      <Aside />
      <form className="form-create">
        <h1>EditUsers</h1>
        <input type="text" />
        <input type="text" />
        <button type="submit">Submit</button>
        <Link to="/adminBook">Cancel</Link>
      </form>
    </div>
  );
};

export default EditUsers;
