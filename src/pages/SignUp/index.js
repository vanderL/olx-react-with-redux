import React, { useState, useEffect } from 'react';

import useApi from '../../services/Api';

import { PageArea } from './styles';
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents';
import { doLogin } from '../../helpers/AuthHandler';

function Login() {
    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [stateList, setStateList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[])

    const api = useApi();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        setError('');

        if(password !== confirmPassword) {
            setError('Senhas não conferem');
            setDisabled(false);
            return
        }

        const json = await api.register(name, email, password, stateLoc);

        if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = "/";
            
        }
        setDisabled(false);
    }

    return (
      <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <PageArea>
                {error && 
                    <ErrorMessage> {error} </ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label 
                        htmlFor="name" 
                        className="area"
                    >
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                id="name"
                                disabled={disabled}
                                value={name}
                                onChange={ e => setName(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label 
                        htmlFor="stateLoc" 
                        className="area"
                    >
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                            <select 
                                value={stateLoc} onChange={ e => setStateLoc(e.target.value)}
                                required
                            >
                                <option value=""></option>
                                { stateList.map((item, key) => 
                                    <option key={key} value={item._id}> {item.name} </option>
                                )}

                            </select>
                        </div>
                    </label>
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
                        htmlFor="confirmPassword" 
                        className="area"
                    >
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input 
                                type="password" 
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={ e => setConfirmPassword(e.target.value)}
                                disabled={disabled}
                                required

                            />
                        </div>
                    </label>
                   

                    <label 
                        htmlFor="remember" 
                        className="area"
                    >
                        <div className="area--title"></div>
                        <div className="area--input">
                           <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
          </PageArea>
      </PageContainer>
  )
}

export default Login;