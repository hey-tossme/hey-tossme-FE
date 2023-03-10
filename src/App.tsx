import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/main.css";
import Main from "./pages/Main";
import Header from "./components/header/Header";
import Notify from "./pages/Notify";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/notify" element={<Notify />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
