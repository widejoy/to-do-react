import Signup from "./pages/Signup";
import Home from "./pages/home";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App(){
    return(

    <div>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
       </Routes>
    </div>
    )
}