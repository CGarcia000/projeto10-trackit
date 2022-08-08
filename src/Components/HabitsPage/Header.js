import { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../App";

import trackIt from "../../assets/img/track-it.svg"

export function Header() {
    const [user] = useContext(UserContext);

    return (
        <Wrapper>
            <img src={trackIt} alt="Logo TrackIt" />
            <img src={user.image} alt="Icone usuário" />
        </Wrapper>
    );
}


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #126BA5;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.3rem;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.3);

    img:nth-child(2) {
        border-radius: 2rem;
        width: 3.3rem;
        height: 3.3rem;
    }
`