import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import './styles/main.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
