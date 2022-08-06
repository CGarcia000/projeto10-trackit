import styled from "styled-components";
import { Check } from "phosphor-react";


export function HabitViewer() {
    const isPressed = true;

    return (
        <Wrapper>

            <HabitInfo isPressed={isPressed} isRecord={false}>
                <h3>{'Ler 1 capítulo de livro'}</h3>

                <p>Sequência atual: <span>{'4 dias'}</span></p>
                <p>Seu recorde: <span className="record">{'5 dias'}</span></p>

            </HabitInfo>

            <ButtonCheck isPressed={isPressed} >
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