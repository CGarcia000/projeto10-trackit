import styled from "styled-components";

import { Header } from "./Header";
import { Footer } from "./Footer";

import { HabitConfig } from "./Habits/HabitConfig";
import { HabitDisplay } from "./Habits/HabitDisplay";

import { Body } from './Styled'

export function HabitsPage() {
    return (
        <>
            <Header />

            <Body>
                <Title>
                    <h2>Meus hábitos</h2>
                    <button>+</button>
                </Title>

                <Habits>
                    <HabitConfig />

                    <HabitDisplay />
                </Habits>

                <Message isVisible={true}>
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
        font-weight: 500;
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
    display: ${props => props.isVisible ? 'block' : 'none'};
`
