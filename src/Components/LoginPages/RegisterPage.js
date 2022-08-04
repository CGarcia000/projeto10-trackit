import { Link } from 'react-router-dom';

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from './Styled';

import logo from '../../assets/img/logo.svg';

export function RegisterPage() {
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
                    <input type='text' placeholder='nome' required />
                    <input type='url' placeholder='foto' required />

                    <SubmitButton>Cadastrar</SubmitButton>

                    <LinkWrapper>
                        <Link to='/'>Já tem uma conta? Faça login!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>
            
        </>
    );
}