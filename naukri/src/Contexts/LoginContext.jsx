import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginContextProvider({children}){

    const [isAuth, setIsAuth ] = useState(false);
    const [ form, setForm ] = useState({ email:"", password:"" })

    return <LoginContext.Provider value={{isAuth,setIsAuth,form,setForm}}>{children}</LoginContext.Provider>
}