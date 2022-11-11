import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
export function AllRoutes(){

    return <Routes>
        <Route path="/" element={<Home/>} />
    </Routes>

}