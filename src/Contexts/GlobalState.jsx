import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial State
const initialState = {
  users: [
    { id: 1, name: "BOOK 1", category:"Terror" },
    { id: 2, name: "BOOK 2", category:"Action"  },
    { id: 3, name: "BOOK 3", category:"Adventure"  },
  ],
};

//CREATE CONTEXT
export const GlobalContext = createContext(initialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
//Actions
const removeUser = (id)=>{
  dispatch({
    type:"REMOVE_USER",
    payload: id
  })
}

const addUser = (user)=>{
  dispatch({
    type:"ADD_USER",
    payload: user
  })
}
return (
  <GlobalContext.Provider
    value={{
      users: state.users,
      removeUser,
      addUser
    }}
  >
    {children}
  </GlobalContext.Provider>
);
}