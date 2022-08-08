import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../App';

import logo from '../../assets/img/logo.svg';

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from './Styled';

export function Login() {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');

    const [user, setUser] = useContext(UserContext);

    function handleLogin(e) {
        e.preventDefault();
        console.log({
            email: emailLogin,
            password: passwordLogin,
        })
        setUser({
            id: 3,
            name: 'Joe',
            image: 'https://pbs.twimg.com/media/FSMjm7dVsAA1SYW.jpg',
            email: 'asdas@fdas',
            password: 'dsad',
            token: 'token'
        })
        return;
    }

    return (
        <>
            <LogoWrapper>
                <img src={logo} alt='Logo TrackIt'/>
            </LogoWrapper>

            <FormWrapper>
                <form onSubmit={handleLogin}>

                    <input type='text' placeholder='email' value={emailLogin} 
                        onChange={e => setEmailLogin(e.target.value)}  required />
                    <input type='password' placeholder='senha' value={passwordLogin} 
                        onChange={e => setPasswordLogin(e.target.value)} required />

                    <SubmitButton>Entrar</SubmitButton>

                    <LinkWrapper>
                        <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>

            <Link to='/habitos'>Hábitos</Link>
        </>
    );
}
