import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//initial State
const initialState = {
  users: [
    { id: 1, name: "BOOK 1", category },
    { id: 2, name: "BOOK 2" },
    { id: 3, name: "BOOK 3" },
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
    payload:IDBRequest
  })
}
return (
  <GlobalContext.Provider
    value={{
      users: state.users,
    }}
  >
    {children}
  </GlobalContext.Provider>
);
}