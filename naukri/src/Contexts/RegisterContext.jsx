import { createContext, useState } from "react";
import axios from "axios";
export const RegisterContext = createContext();

let initState = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: "",
    whatsappUpdates: "no"
}

export function RegisterContextProvider({children}){

    const [ form, setForm ] = useState(initState);

    

    return <RegisterContext.Provider value={{form, setForm}}>{children}</RegisterContext.Provider>
}