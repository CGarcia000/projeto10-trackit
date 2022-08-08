import styled from "styled-components";
import { Trash } from "phosphor-react";
import { useContext } from "react";

import { deleteHabit } from "../../../assets/services/requests";

import { WeekButtonsDisplay } from "./WeekButtonsDisplay";

import { UserContext } from "../../App";

export function HabitDisplay({
    habitObj,
    setHabits,
}) {
    const [user] = useContext(UserContext);

    function handleDelete() {
        const resultDelete = window.confirm('Você deseja deletar o hábito?');
        if (resultDelete) {
            deleteHabit(habitObj.id, user.token).then(res => {
                setHabits(current => current.filter(habit => habit.id !== habitObj.id));
            }).catch(e => {
                console.log(e);
            });
        }
    }
    
    return (
        <Wrapper>
            
            <Title>
                <h3>{habitObj.name}</h3>
                <Trash size={20} weight="fill" style={{cursor: 'pointer'}} onClick={handleDelete} />
            </Title>

            <WeekButtonsDisplay habitWeekdays={habitObj.days} />
            
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
