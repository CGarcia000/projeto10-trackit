import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { postLogin } from '../../assets/services/requests';
import { UserContext } from '../App';

import logo from '../../assets/img/logo.svg';

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from './Styled';

export function Login() {
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const [user, setUser] = useContext(UserContext);

    function handleLogin(e) {
        if (isLoading) return;
        e.preventDefault();
        setIsLoading(current => true);

        const body = {
            email: emailLogin,
            password: passwordLogin,
        }

        postLogin(body).then(res => {
            setUser(current => ({
                id: res.data.id,
                name: res.data.name,
                image: res.data.image,
                email: res.data.email,
                token: res.data.token,
            }))
            setIsLoading(current => false);
            navigate('/hoje');
        }).catch(e => {
            alert('Um erro inesperado ocorreu!')
            setIsLoading(current => false);
            console.log(e);
        })
    }

    return (
        <>
            <LogoWrapper>
                <img src={logo} alt='Logo TrackIt'/>
            </LogoWrapper>

            <FormWrapper>
                <form onSubmit={handleLogin}>

                    <input type='text' placeholder='email' value={emailLogin} 
                        onChange={e => {
                            if (isLoading) return;
                            setEmailLogin(e.target.value);
                        }}  required />
                    <input type='password' placeholder='senha' value={passwordLogin} 
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordLogin(e.target.value);
                        }} required />

                    <SubmitButton>
                        {isLoading? 
                        <ThreeDots 
                            height="2rem"
                            width="2rem"
                            radius="6"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            visible={true}
                        /> : 
                        'Entrar'}
                    </SubmitButton>

                    <LinkWrapper>
                        <Link to='/cadastro'>Não tem uma conta? Cadastre-se!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>
        </>
    );
}
