import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.svg';

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from './Styled';

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

                    <LinkWrapper>
                        <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>
            
        </>
    );
}
