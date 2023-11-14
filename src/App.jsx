import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/home";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Homepage from "./pages/homepage";

export default function App(){
    return(

    <div>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/homepage" element={<Homepage></Homepage>}></Route>


       </Routes>
    </div>
    )
}