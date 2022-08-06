import styled from "styled-components";
import { useState, useEffect } from "react";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { HabitConfig } from "./Habits/HabitConfig";
import { HabitDisplay } from "./Habits/HabitDisplay";

import { Body } from './Styled'

import { Plus } from "phosphor-react";

export function HabitsPage() {
    const [haveHabit, setHaveHabit] = useState(false);
    const [habits, setHabits] = useState([]); // add res de cria novo habito


    function getHabits(noHabit=true) {
        let resGetHabits = [];
        if (!noHabit) {
            resGetHabits = [{
                    id: 1,
                    name: "Nome do hábito",
                    days: [1, 3, 5]
                }, {
                    id: 2,
                    name: "Nome do hábito 2",
                    days: [1, 3, 4, 6]
                }
            ];
        }   
        setHaveHabit(current => resGetHabits.length !== 0);
        // if (resGetHabits.length !== 0) setHaveHabit(current => true);
        // if (resGetHabits.length === 0) setHaveHabit(current => false);
        return resGetHabits;
    }

    useEffect(() => {
        const resGetHabits = getHabits(false);
        setHabits(resGetHabits);
    }, []);
    
    console.log(habits, haveHabit);
    return (
        <>
            <Header />

            <Body>
                <Title>
                    <h2>Meus hábitos</h2>
                    <button>
                        <Plus size={'0.9rem'} weight="bold" color={'#fff'} />
                    </button>
                </Title>

                <Habits>
                    {/* <HabitConfig /> */}

                    {habits.map(habit => <HabitDisplay key={habit.key} habitTitle={habit.name} habitWeekdays={habit.days} />)}

                </Habits>

                <Message isNotVisible={haveHabit}>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </Message>

            </Body>
        
            <Footer />
        </>
    );
}

const Title = styled.div`
    display: flex;
    /* width: 90%; */
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-top: 1rem;

    h2 {
        font-size: 1.4rem;
        font-weight: 400;
        color: #126BA5;
    }

    button {
        width: 2rem;
        height: 1.5rem;
        color:white;
        background-color: #52B6FF;
        border: none;
        border-radius: 3px;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
`

const Habits = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
`

const Message = styled.div`
    margin-top: 1rem;
    display: ${props => props.isNotVisible ? 'none' :'block'};
`
