import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { Check } from "phosphor-react";

import { postHabitAsDone, postHabitAsNotDone } from "../../../assets/services/requests";

import { UserContext } from "../../App";

export function HabitViewer({
    habitObj,
    setTodayHabits,
}) {
    const [isPressed, setIsPressed] = useState(habitObj.done);
    const [sequence, setSequence] = useState(habitObj.currentSequence);
    const [isRecord, setIsRecord] = useState(habitObj.highestSequence === habitObj.currentSequence);

    const [user] = useContext(UserContext);

    function handleClick() {
        setIsPressed(current => !current)
        if (isPressed) { // foi desmarcado (post para marcar como undone)
            postHabitAsNotDone(habitObj.id, user.token).then(res => {
                setSequence(current => current - 1);
                habitObj.done = false;
                setTodayHabits(current => [...current]);
            }).catch(e => {
                console.log(e)
            })
        }
        else { // foi marcado (post para marcar como done)
            postHabitAsDone(habitObj.id, user.token).then(res => {
                setSequence(current => current + 1);
                habitObj.done = true;
                setTodayHabits(current => [...current]);
            }).catch(e => {
                console.log(e)
            });
        }
    }

    useEffect(() => {
        setIsRecord(current => habitObj.highestSequence <= sequence)
    }, [sequence])

    return (
        <Wrapper>

            <HabitInfo isPressed={isPressed} isRecord={isRecord}>
                <h3>{habitObj.name}</h3>

                <p>Sequência atual: <span>{sequence}</span></p>
                <p>Seu recorde: <span className="record">{isRecord ? sequence : habitObj.highestSequence}</span></p>

            </HabitInfo>

            <ButtonCheck onClick={handleClick} isPressed={isPressed} >
                <Check size={'3rem'} weight="bold" color={'#fff'} />
            </ButtonCheck>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.5rem;
    height: 5rem;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 0.5rem;
`

const HabitInfo = styled.div`

    h3 {
        font-weight: 400;
    }

    p {
        font-size: 0.8rem;

    }

    p span {
        color: ${props => props.isPressed ? '#8fc549' : '#666666'};
    }

    .record {
        color: ${props => props.isRecord ? '#8fc549' : '#666666'};
    }

`

const ButtonCheck = styled.button`
    border: none;
    color: white;
    height: 4rem;
    width: 4rem;
    border-radius: 5px;
    cursor: pointer;
    flex-shrink: 0;
    background-color: ${props => props.isPressed ? '#8fc549' : '#e7e7e7'};
    margin-left: 0.5rem;
`