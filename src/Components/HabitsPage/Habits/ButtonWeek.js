import styled from "styled-components";


export function ButtonWeek({
    btnObj,
}) {
    return(
        <>
            <Button isActive={btnObj.isActive}>{btnObj.weekday}</Button>
        </>
    );
}

const Button = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    color: ${props => props.isActive ? 'white' : '#d4d4d4'};
    background-color: ${props => props.isActive ? '#CFCFCF' : 'white'};
    margin-right: 0.3rem;
    cursor: pointer;
`