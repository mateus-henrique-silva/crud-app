import React from 'react'

export default (state, action)=>{
    switch(action.type){
        case'REMOVE_USER':

        return {
            users: state.users.filter(()=>{
                return 
            })
        }
        default:
            return state
    }
}


