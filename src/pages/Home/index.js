import React, { useState } from 'react';

import useApi from '../../services/Api';

import { PageArea, SearchArea } from './styles';
import {  PageContainer } from '../../components/MainComponents';

function Login() {
    const api = useApi();

    return (

      <>
        <SearchArea>
          <PageContainer>
            <div className="searchBox">
              <form action="GET" action="/ads">
                <input 
                  type="text"
                  name="q"
                  placeholder="O que você procura?"
                />
                <select name="state" id="state"></select>
                <button>Pesquisar</button>
              </form>
            </div>
            <div className="categoryList">

            </div>
          </PageContainer> 
        </SearchArea>
        <PageContainer>
            <PageArea>
            Home
            </PageArea>
        </PageContainer>

      </>
  )
}

export default Login;