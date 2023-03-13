import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Header from "./components/header/Header";
import FixedBtn from "./components/fixedBtn/FixedBtn";
import SignUp from "./pages/SignUp";
import FindPassword from "./pages/FindPassword";
import Notify from "./pages/Notify";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/findpw" element={<FindPassword />}></Route>
                <Route path="/notify" element={<Notify />}></Route>
            </Routes>
            <FixedBtn />
        </BrowserRouter>
    );
}
