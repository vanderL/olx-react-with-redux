import React from 'react';

import { PageArea } from './styles';
import { PageContainer, PageTitle } from '../../components/MainComponents';

function Login() {
  return (
      <PageContainer>
          <PageTitle>Login</PageTitle>
          <PageArea>
                <form>
                    <label 
                        htmlFor="email" 
                        className="area"
                    >
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input 
                                type="email" 
                                id="email"
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
                            />
                        </div>
                    </label>

                    <label 
                        htmlFor="remember" 
                        className="area"
                    >
                        <div className="area--title"></div>
                        <div className="area--input">
                           <button>Fazer Login</button>
                        </div>
                    </label>
                </form>
          </PageArea>
      </PageContainer>
  )
}

export default Login;