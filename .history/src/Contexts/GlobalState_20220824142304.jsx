import React, {createContext, useReducer} from 'react'
import AddReducer from "./AppReducer"
//initial State 
const initialState ={
    Books:[
        {id:1, name:"BOOK 1"},
        {id:2, name:"BOOK 2"},
        {id:3, name:"BOOK 3"}
    ]
}

//CREATE CONTEXT
export const GlobalContext = createContext(initialState);

//