import React, { useContext } from "react";
import "./UserList.css";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Contexts/GlobalState";

const UserList = () => {
  const { users } = useContext(GlobalContext);
  console.log(users);
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
      {users.map((user) => (
        <div className="list-user">
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              alignItems: "center",
            }}
          >
            <strong>{}</strong>
          </div>
          <div className="flex-btn">
            <Link to="/edit/:id">Edit</Link>
            <button>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
