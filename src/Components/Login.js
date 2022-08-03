import styled from 'styled-components';
import logo from '../assets/img/logo.svg';


export function Login() {



    function handleLogin(e) {
        e.preventDefault();
        return;
    }

    return (
        <>
            <LogoWrapper>
                <img src={logo} alt='Logo TrackIt'/>
            </LogoWrapper>

            <FormWrapper>
                <form onSubmit={handleLogin}>

                    <input type='text' placeholder='email' required />
                    <input type='password' placeholder='senha' required />

                    <SubmitButton>Entrar</SubmitButton>

                </form>
            </FormWrapper>
            
        </>
    );
}

const LogoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 3rem;
    `
const FormWrapper = styled.div`
    width: 90%;
    
    margin: 0 auto;
    display:flex;
    flex-direction: column;

    input {
        width: 100%;
        height: 2.5rem;
        font-size: 1.5rem;
        border: 1px solid #d4d4d4;
        border-radius: 3px;
        margin-bottom: 0.5rem;
        padding: 0 0.5rem;
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