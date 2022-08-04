import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./LoginPages/Login";
import { RegisterPage } from "./LoginPages/RegisterPage";
import { HabitsPage } from "./HabitsPage";
import { TodayHabits } from "./HabitsPage/TodayHabits";
import { History } from "./HabitsPage/History";

export default function App() {


    return (
        <>
            <GlobalStyle />
            

            <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<RegisterPage />}/> 
                <Route path='/habitos' element={<HabitsPage />}/> 
                <Route path='/hoje' element={<TodayHabits />}/> 
                <Route path='/historico' element={<History />}/> 
            </Routes>
            
            
            </BrowserRouter>

        </>
    );
}