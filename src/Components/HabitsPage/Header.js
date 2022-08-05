import styled from "styled-components";

import trackIt from "../../assets/img/track-it.svg"
import userIcon from "../../assets/img/user-icon.svg"

export function Header() {
    return (
        <Wrapper>
            <img src={trackIt} alt="Logo TrackIt" />
            <img src={userIcon} alt="Icone usuário" />
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
`