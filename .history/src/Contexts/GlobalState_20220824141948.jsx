import React, {createContext, useReducer} from 'react'
import AddReducer from "./AppReducer"
//initial State 
const initialState ={
    Books:[
        {id:1},
        {},
        {}
    ]
}
const GlobalState = () => {
  return (
    <div>

    </div>
  )
}

export default GlobalState