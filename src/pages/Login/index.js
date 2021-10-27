import React, { useState } from 'react';

import useApi from '../../services/Api';

import { PageArea } from './styles';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandler';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const api = useApi();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);

        const json = await api.login(email, password);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword);
            window.location.href = "/";
            setDisabled(false);

        }
    }

    return (
      <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error && 
                    <ErrorMessage> {error} </ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label 
                        htmlFor="email" 
                        className="area"
                    >
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                id="email"
                                disabled={disabled}
                                value={email}
                                onChange={ e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label 
                        htmlFor="password" 
                        className="area"
                    >
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                id="password"
                                value={password}
                                onChange={ e => setPassword(e.target.value)}
                                disabled={disabled}
                                required

                            />
                        </div>
                    </label>
                    <label 
                        htmlFor="remember" 
                        className="area"
                    >
                        <div className="area--title">Lembrar-me</div>
                        <div className="area--input">
                            <input 
                                type="checkbox" 
                                id="remember"
                                checked={rememberPassword}
                                onChange={ () => setRememberPassword(!rememberPassword)}
                                disabled={disabled}

                            />
                        </div>
                    </label>

                    <label 
                        htmlFor="remember" 
                        className="area"
                    >
                        <div className="area--title"></div>
                        <div className="area--input">
                           <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
          </PageArea>
      </PageContainer>
  )
}

export default Login;