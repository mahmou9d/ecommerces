/* eslint-disable react-refresh/only-export-components */

import { createContext} from "react";



// @ts-ignore
export const Context = createContext();



// eslint-disable-next-line react/prop-types
const AppContext = ({ children }) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
        )
    
}

export default AppContext;

