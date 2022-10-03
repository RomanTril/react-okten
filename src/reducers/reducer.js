import {useReducer} from "react";

import {actions} from "./action";


    const reducer = (state, action) => {
        switch (action.type) {
            case actions.CREATE:
                return [...state, {id:state.length ? state[state.length - 1].id + 1 : 1,name:action.payload.name}]

            case actions.DELETE:
                if (state.findIndex(value=>value.id===action.payload.id)!==-1){
                    state.splice(state.findIndex(value=>value.id===action.payload.id),1)
                }
                return [...state]
        }
    }

const useAnimalReducer = () => useReducer(reducer, [])

export {useAnimalReducer}