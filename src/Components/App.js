import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Login } from "./Login";

export default function App() {


    return (
        <>
            <GlobalStyle />
            

            <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Login />}/>
            </Routes>
            
            
            </BrowserRouter>

        </>
    );
}