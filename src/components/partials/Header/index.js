import React from 'react';

import { Link } from 'react-router-dom';

import { HeaderArea } from './styles';

import { isLogged } from '../../../helpers/AuthHandler';

function Header() {
  console.log(isLogged)
  return (
    <HeaderArea>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <span className="logo-1">O</span>
              <span className="logo-2">L</span>
              <span className="logo-3">X</span>
            </Link>
          </div>
          <nav>
            <ul>
            {
              isLogged() ? (
                <>
                 <li>
                    <Link to="/my-account"> Minha Conta </Link>
                  </li>
                  <li>
                    <Link to="/logout"> Sair </Link>
                  </li>
                  <li>
                    <Link to="/post-an-ad" className="button"> Poste Um Anuncio </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to=""> Login </Link>
                  </li>
                  <li>
                    <Link to=""> Cadastrar </Link>
                  </li>
                  <li>
                    <Link to="/singin" className="button"> Poste Um Anuncio </Link>
                  </li>
                </>
              )
            }
            </ul>
          </nav>
        </div>
    </HeaderArea>
  )
}

export default Header;