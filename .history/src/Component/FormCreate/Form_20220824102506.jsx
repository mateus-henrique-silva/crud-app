import React from "react";

import AddUsers from "./AddUsers";
import EditUsers from "./EditUsers";
import Aside from "../Aside/Aside"

const Form = () => {
  return (
    <div style>
      <Aside/>
      <AddUsers />
      <EditUsers />
    </div>
  );
};

export default Form;
