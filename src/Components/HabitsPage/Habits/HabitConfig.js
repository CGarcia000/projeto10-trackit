import styled from "styled-components";
import { useState, createContext } from "react";


import { WeekButtonsConfig } from "./WeekButtonsConfig";

const arr = [
    {idDay: 0, day: 'D', active: false},
    {idDay: 1, day: 'S', active: false},
    {idDay: 2, day: 'T', active: false},
    {idDay: 3, day: 'Q', active: false},
    {idDay: 4, day: 'Q', active: false},
    {idDay: 5, day: 'S', active: false},
    {idDay: 6, day: 'S', active: false},
];

export const WeekDaysContext = createContext();

export function HabitConfig({
    setHabits,
    setHabitConfigOpen,
}) {
    // use state obj para rastrear os dias da semana
    const [arrWeekDays, setArrWeekDays] = useState(JSON.parse(JSON.stringify(arr)));
    const [habitName, setHabitName] = useState('');


    function handleCancel() {
        return;
    }
    
    function handleSave() {
        const arrWeekdaysRequest = makeArrWeekdaysRequest(arrWeekDays);

        console.log({
            name: habitName,
            days: arrWeekdaysRequest,
        })

        setHabits(current => [{
            id: 9000,
            name: habitName,
            days: arrWeekdaysRequest,
        }, ...current])
        setHabitConfigOpen(current => false);
        setArrWeekDays(current => JSON.parse(JSON.stringify(arr)));
        setHabitName('');
        return;
    }
 
    function makeArrWeekdaysRequest(arr) {
        return arr.filter(obj => obj.active).map(obj => obj.idDay);
    }

    return (
        <Wrapper>
            <WeekDaysContext.Provider value={[arrWeekDays, setArrWeekDays]}>

                <input type="text" placeholder="nome do hábito" 
                    value={habitName} onChange={e => setHabitName(e.target.value)}
                />

                <WeekButtonsConfig />

                <Options>
                    <span onClick={handleCancel}>Cancelar</span>
                    <button onClick={handleSave}>Salvar</button>
                </Options>
            
            </WeekDaysContext.Provider>
        </Wrapper>
    );
}

const Wrapper = styled.div` 
    width: 100%;
    padding: 0 5%;
    height: 8rem;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;

    input {
        width: 100%;
        height: 2rem;
        margin: 0 auto;
        margin-top: 1rem;
        padding: 0.3rem;
        font-size: 1rem;
        line-height: 1.5rem;
        border-radius: 5px;
        border: 1px solid #d4d4d4;
    }
`

const Options = styled.div` 
    display: flex;
    margin-top: 0.9rem;
    justify-content: end;
    align-items: center;

    span {
        font-size: 0.8rem;
        margin-right: 0.8rem;
        color: #52B6FF;
        cursor: pointer;
    }

    button {
        width: 4rem;
        height: 1.5rem;
        color:white;
        background-color: #52B6FF;
        border: none;
        border-radius: 3px;
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
` 