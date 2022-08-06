import styled from "styled-components";

import { Header } from "../Header";
import { Footer } from "../Footer";
import { Body } from '../Styled'

export function History() {
    return (
        <>
            <Header />

            <Body>

                <Title>
                    <h2>Histórico</h2>

                    <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                </Title>


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
        margin-bottom: 1rem;
    }
`