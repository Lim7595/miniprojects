import React, { createContext, useReducer, useContext } from "react";


const AppContext = createContext()

const useAppContext = () => {
    return useContext(AppContext)
}

const initialState = {
    tasks : [
        {
            id:"id1",
            fecha: 'fecha',
            texto: '11111111',
            toEdit: false
        },
        {
            id:"id2",
            fecha: 'fecha',
            texto: '11122222222',
            toEdit: false
        }
    ]
}

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD": {
            return {
                ...state,
                tasks: [...state.tasks, action.value]
            }
        }
        case 'EDIT': {
            // buscar - find
            const temp = state.tasks
            const toUpdate = temp.find((task) => task.id === action.value.id)
            // pasar nuevo valor
            toUpdate.texto = action.value.texto
            // devolver
            return {
                ...state,
                tasks: [...temp]
            }
        }

        case 'DELETE': {
            const temp = state.tasks;
            // filter devuelve un nuevo Array, llenado con los elemtos que pasan la condicion -si ninguno pasa devuelve un array vacio-
            const newTaskGroup = temp.filter((task) => task.id !== action.value);
            return {
                ...state,
                tasks: newTaskGroup
            }
        }
        default:
            console.log('aa')
    }
    return state
}


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{tasks:state.tasks, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, useAppContext}