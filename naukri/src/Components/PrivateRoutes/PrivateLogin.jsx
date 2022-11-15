import { LoginContext } from "../../Contexts/LoginContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { Home } from "../../Routes/Home";

export function PrivateLogin({children}){

    const { isAuth } = useContext(LoginContext);
    console.log("isAuth form prvtLogin",isAuth)
 
    if(isAuth === false){

        return <Navigate to="/" />
    }
    console.log("isAuth form prvtLogin",isAuth)
    return children;
}