import { Routes, Route } from "react-router-dom";
import { EmployerAdmin } from "./EmployerAdmin";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";
export function AllRoutes(){

    return <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/employer-admin" element={<EmployerAdmin/>} />
        <Route path="/register" element={<Register/>} />
    </Routes>

}