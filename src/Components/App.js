import GlobalStyle from "../assets/css/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./LoginPages/Login";
import { RegisterPage } from "./LoginPages/RegisterPage";
import { HabitsPage } from "./HabitsPage";
import { TodayHabits } from "./HabitsPage/TodayHabits";
import { useState, createContext } from "react";
import { History } from "./HabitsPage/History";

export const UserContext = createContext();
export const PercentDoneContext = createContext();

export function App() {
    const [percentDone, setpercentDone] = useState(0);
    const [user, setUser] = useState({});

    console.log(user);

    return (
        <>
            <GlobalStyle />
            
            <UserContext.Provider value={[user, setUser]}>
            <PercentDoneContext.Provider value={[percentDone, setpercentDone]}>

            <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Login />}/>
                <Route path='/cadastro' element={<RegisterPage />}/> 
                <Route path='/habitos' element={<HabitsPage />}/> 
                <Route path='/hoje' element={<TodayHabits />}/> 
                <Route path='/historico' element={<History />}/> 
            </Routes>
            
            </BrowserRouter>
    
            </PercentDoneContext.Provider>
            </UserContext.Provider>

        </>
    );
}