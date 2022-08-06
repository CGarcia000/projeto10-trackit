import styled from "styled-components";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Body } from '../Styled';
import { HabitViewer } from "./HabitViewer";

export function TodayHabits() {
    return (
        <>
            <Header />

            <Body>

                <Title isConcluded={false}>
                    <h2>Segunda 17/05</h2>
                    <p>Nenhum hábito concluído ainda</p>
                </Title>

                <HabitViewer />
                <HabitViewer />

            </Body>
        
            <Footer />
        </>
    );
}

const Title = styled.div`
    padding-top: 1.5rem;
    margin-bottom: 1rem;
    
    h2 {
        font-weight: 400;
        font-size: 1.4rem;
        color: #126ba5;
    }

    p {
        color: ${props => props.isConcluded ? '#8fc549' : '#bababa'}
    }
`
