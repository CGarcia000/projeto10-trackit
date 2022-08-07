import styled from "styled-components";
import { Trash } from "phosphor-react";

import { WeekButtonsDisplay } from "./WeekButtonsDisplay";

export function HabitDisplay({
    habitTitle,
    habitWeekdays,
}) {
    // use state obj para rastrear os dias da semana
    
    return (
        <Wrapper>
            
            <Title>
                <h3>{habitTitle}</h3>
                <Trash size={20} weight="fill" style={{cursor: 'pointer'}} />
            </Title>

            <WeekButtonsDisplay habitWeekdays={habitWeekdays} />
            
        </Wrapper>
    );
}

const Wrapper = styled.div` 
    width: 100%;
    padding: 0 5%;
    height: 5rem;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    
    h3 {
        font-size: 1rem;
        font-weight: 400;
    }
`
