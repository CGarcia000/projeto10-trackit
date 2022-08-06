import styled from "styled-components";
import { Trash } from "phosphor-react";

import { ButtonWeek } from "./ButtonWeek";

export function HabitDisplay() {
    // use state obj para rastrear os dias da semana

    return (
        <Wrapper>
            
            <Title>
                <h3>Hábito</h3>
                <Trash size={20} weight="fill" style={{cursor: 'pointer'}} />
            </Title>

            <WeekButtons>
                <ButtonWeek btnObj={{weekday: 'F', isActive: false}}/>
                <ButtonWeek btnObj={{weekday: 'F', isActive: true}}/>
            </WeekButtons>
            
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


const WeekButtons = styled.div` 
    display: flex;
    margin-top: 0.5rem;
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
