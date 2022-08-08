import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { LogoWrapper, FormWrapper, SubmitButton, LinkWrapper } from './Styled';

import logo from '../../assets/img/logo.svg';

export function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);

    const [emailRegister, setEmailRegister] = useState('');
    const [passwordRegister, setPasswordRegister] = useState('');
    const [nameRegister, setNameRegister] = useState('');
    const [urlRegister, setUrlRegister] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(current => true);
        console.log({
            email: emailRegister,
            name: nameRegister,
            image: urlRegister,
            password: passwordRegister
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
                        onChange={e => setEmailRegister(e.target.value)}  required />
                    <input type='password' placeholder='senha' value={passwordRegister} 
                        onChange={e => setPasswordRegister(e.target.value)} required />
                    <input type='text' placeholder='nome' value={nameRegister} 
                        onChange={e => setNameRegister(e.target.value)} required />
                    <input type='url' placeholder='url foto' value={urlRegister} 
                        onChange={e => setUrlRegister(e.target.value)} required />

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