import styled from "styled-components"

const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 3rem;
    `
const FormWrapper = styled.div`
    width: 20rem;    
    margin: 0 auto;
    
    form {
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        width: 100%;
        height: 2.5rem;
        font-size: 1.5rem;
        border: 1px solid #d4d4d4;
        border-radius: 3px;
        margin-bottom: 0.5rem;
        padding: 0 0.5rem;
    }

    input::placeholder {
        color: #DBDBDB;
    }


    @media(max-width: 650px) {
        width: 90%
    }
    
    `

const LinkWrapper = styled.div `
    margin-top: 2rem;

    a {
        color: #52b6ff;
        font-size: 0.9rem;
    }
`

const SubmitButton = styled.button.attrs({type: 'submit'})`
    width: 100%;
    border: none;
    border-radius: 3px;
    height: 2.5rem;
    font-size: 1.5rem;
    color: white;
    background-color: #52B6FF;
    cursor: pointer;
`

export { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper }