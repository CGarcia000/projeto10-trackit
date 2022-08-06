import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { LinkWrapper } from './Styled';


export function Footer() {

    const styleProgressBar = buildStyles({
        pathTransitionDuration: 0.5,
        backgroundColor: "#52B6FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
    });

    return (
        <Wrapper>
            <LinkWrapper fontSize='1.2rem'>
                <Link to='/habitos'>Hábitos</Link>
            </LinkWrapper>

            <ProgressBarWrapper>
                <Link to='/hoje'>
                    <CircularProgressbarWithChildren 
                        value={0.6} 
                        background={true}
                        backgroundPadding={4}
                        maxValue={1} 
                        styles={styleProgressBar}
                    >
                        <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" />
                        <div style={{ fontSize: 15, marginTop: -5, color: '#fff'}}>
                            Hoje
                        </div>
                    </CircularProgressbarWithChildren>
                </Link>
            </ProgressBarWrapper>

            <LinkWrapper fontSize='1.2rem'>
                <Link to='/historico'>Histórico</Link>
            </LinkWrapper>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: white;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
`

const ProgressBarWrapper = styled.div`
    width: 5rem;
    height: 5rem;
    margin-bottom: 2.1rem;
`