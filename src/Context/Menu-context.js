import { createContext, useReducer } from "react";

export const MenuContext = createContext({})


const initialState = {
    
}

export const MenuProvider = ({children}) => {
    const [state, dispatch] = useReducer(state, initialState)


    const menuValue = [state, dispatch]
    return (
        <MenuContext.Provider value={menuValue}>
            {children}
        </MenuContext.Provider>
    )
}