import styled from "styled-components";

import { ButtonWeek } from "./ButtonWeek";

export function HabitConfig() {
    // use state obj para rastrear os dias da semana

    return (
        <Wrapper>
            <input placeholder="nome do hábito"/>
            <WeekButtons>
                
                <ButtonWeek btnObj={{weekday: 'F', isActive: false}}/>
                <ButtonWeek btnObj={{weekday: 'F', isActive: true}}/>
            </WeekButtons>


            <Options>
                <span>Cancelar</span>
                <button>Salvar</button>
            </Options>
            
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
    }
`


const WeekButtons = styled.div` 
    display: flex;
    margin-top: 0.5rem;
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