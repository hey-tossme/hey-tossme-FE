import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./store/hooks/configureStore.hook";
import Main from "./pages/Main";
import Login from "./pages/Login";
import OauthRedirect from "./pages/OauthRedirect";
import Header from "./components/header/Header";
import FixedBtn from "./components/fixedBtn/FixedBtn";
import SignUp from "./pages/SignUp";
import FindPassword from "./pages/FindPassword";
import MyPage from "./pages/MyPage";
import Notify from "./pages/Notify";
import Category from "./pages/Category";
import Detail from "./pages/Detail";
import Write from "./pages/Write";
import "./styles/main.css";

export default function App() {
    const getLoginState = useAppSelector((state) => state.user.token);

    return (
        <BrowserRouter>
            <Header />
            {getLoginState !== "" && <FixedBtn />}
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/auth/callback/kakao" element={<OauthRedirect />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/findpw" element={<FindPassword />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
                <Route path="/notify" element={<Notify />}></Route>
                <Route path="/category" element={<Category />}></Route>
                <Route path="/category/:category" element={<Category />}></Route>
                <Route path="/detail/:id" element={<Detail />}></Route>
                <Route path="/write" element={<Write />}></Route>
                <Route path="/edit/:id" element={<Write />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
