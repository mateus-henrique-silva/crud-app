import React, {createContext, useReducer} from 'react'
import AddReducer from "./AppReducer"
//initial State 
const initialState ={
    Books:[
        {},
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