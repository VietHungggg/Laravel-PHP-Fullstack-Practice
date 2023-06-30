import { createContext, useContext, useState } from "react";

const StageContext = createContext({
    user: null,
    token: null,
    setUser: () =>{},
    setToken: () =>{},
})

export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({
        name: 'HungYs',
    });
    const [token, _setToken] = useState(null);

    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    };

    return (
        <StageContext.Provider value={{ 
            user,
            token,
            setUser,
            setToken,
            }}> 
            {children}
        </StageContext.Provider>
        
    )
}

export const useStateContext = () => useContext(StageContext)