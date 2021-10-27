import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

import useApi from '../../services/Api';

import { PageArea, SearchArea } from './styles';
import {  PageContainer } from '../../components/MainComponents';

function Login() {
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);

    const api = useApi();

    useEffect(() => {
      const getState = async (state) => {
        const slist = await api.getStates();
        setStateList(slist);
      }

      getState();
    }, []);

    useEffect(() => {
      const getCategories = async (state) => {
        const categoriesList = await api.getCategories();
        setCategories(categoriesList);
      }

      getCategories();
    }, [])

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
                <select name="state" id="state">
                  {stateList.map((state, key) => 
                    <option key={key} value={state.name}> {state.name}</option>
                  )}
                </select>
                <button>Pesquisar</button>
              </form>
            </div>
            <div className="categoryList">
              {categories.map((categories, key) => (
                <Link key={key} to={`/ads?cat=${categories.slug}`} className="categoryItem">
                  <img src={categories.img} alt={categories.slug} />
                  <span>{categories.name}</span>
                </Link>
              ))}
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