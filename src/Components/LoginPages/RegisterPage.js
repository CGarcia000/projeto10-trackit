import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from './Styled';

import logo from '../../assets/img/logo.svg';

export function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [urlRegister, setUrlRegister] = useState('');

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        if (isLoading) return;
        setIsLoading(current => true);
        const body = {
            email: emailRegister,
            name: nameRegister,
            image: urlRegister,
            password: passwordRegister
        }

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', body);

        promise.then(res => {
            setIsLoading(current => false);
            navigate('/')
        })
        promise.catch(e => {
            alert('Um erro inesperado ocorreu')
            setIsLoading(current => false);
            console.log(e);
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

                    <input type='text' placeholder='email' value={emailRegister} 
                        onChange={e => {
                            if (isLoading) return;
                            setEmailRegister(e.target.value)
                        }}  required />
                    <input type='password' placeholder='senha' value={passwordRegister} 
                        onChange={e => {
                            if (isLoading) return;
                            setPasswordRegister(e.target.value)
                        }} required />
                    <input type='text' placeholder='nome' value={nameRegister} 
                        onChange={e => {
                            if (isLoading) return;
                            setNameRegister(e.target.value)
                        }} required />
                    <input type='url' placeholder='url foto' value={urlRegister} 
                        onChange={e => {
                            if (isLoading) return;
                            setUrlRegister(e.target.value)
                        }} required />

                    <SubmitButton>
                        {isLoading ? 
                        <ThreeDots 
                            height="2rem"
                            width="2rem"
                            radius="6"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            visible={true}
                        /> : 
                        'Cadastrar'}
                    </SubmitButton>

                    <LinkWrapper>
                        <Link to='/'>Já tem uma conta? Faça login!</Link>
                    </LinkWrapper>

                </form>
            </FormWrapper>
            
        </>
    );
}