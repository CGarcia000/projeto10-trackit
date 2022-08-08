import styled from "styled-components";
import { useContext } from "react";

import { WeekDaysContext } from "./HabitConfig";

export function WeekButtonsConfig({
    isLoading
}) {
    const [arrWeekDays, setArrWeekDays] = useContext(WeekDaysContext);

    function toggleActive(dayButton) {
        if (isLoading) return;
        dayButton.active = !dayButton.active;
        setArrWeekDays(() => [...arrWeekDays]);
    }

    return(
        <Buttons>
            {arrWeekDays.map((dayButton, i) => {
                return (<Button 
                    key={i} 
                    isActive={dayButton.active}
                    onClick={() => toggleActive(dayButton)}
                >
                    {dayButton.day}
                </Button>);
            })}
        </Buttons>
    );
}

const Buttons = styled.div` 
    display: flex;
    margin-top: 0.5rem;
`

const Button = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    color: ${props => props.isActive ? 'white' : '#d4d4d4'};
    background-color: ${props => props.isActive ? '#CFCFCF' : 'white'};
    margin-right: 0.3rem;
    cursor: pointer;
`