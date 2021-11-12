import React, { useState, useEffect } from 'react';
import {useLocation, useHistory, useParams} from 'react-router-dom';

import useApi from '../../services/Api';

import { PageArea } from './styles';
import {  PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';
let timer;

function Ads() {
    const api = useApi();
    const history = useHistory();

    const useQueryString = () => {
      return new URLSearchParams( useLocation().search );
    }

    const query = useQueryString();

    const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '');
    const [cat, setCat] = useState(query.get('cat') != null ? query.get('cat') : '')
    const [searchState, setSearchState] = useState(query.get('state') != null ? query.get('state') : '')
    
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adsList, setAdsList] = useState([]);

    const [resultOpacity, setResultOpacity] = useState(1);

    const getAdsList = async () => {
      const json = await api.getRecentAds({
        sort: 'desc',
        limit: 12,
        q,
        cat,
        searchState
      });

      setAdsList(json.ads);
      setResultOpacity(1);
    }

    useEffect(() => {
      let queryString = [];
      
      if(q) {
        queryString.push(`q=${q}`);
      }

      if(cat) {
        queryString.push(`cat=${cat}`);
      }

      if(searchState) {
        queryString.push(`state=${searchState}`);
      }

      history.replace({
        search:`?${queryString.join('&')}`
      });

      if(timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(getAdsList, 2000);
      setResultOpacity(0.3);

    }, [q, cat, searchState])

    useEffect(() => {
      const getState = async () => {
        const slist = await api.getStates();
        setStateList(slist);
      }

      getState();
    }, []);
    
    useEffect(() => {
      const getCategories = async () => {
        const categoriesList = await api.getCategories();
        setCategories(categoriesList);
      }

      getCategories();
    }, [])

    return (
      <PageContainer>
        <PageArea>
          <div className="leftSide">
            <form method="GET">

             <input 
              type="text" 
              name="q" 
              placeholder="O que você procura?" 
              value={q}
              onChange={e => setQ(e.target.value)}
            /> 

              <div className="filterName"> Estado: </div>
              <select 
                name="state" 
                value={searchState}
                onChange={e => setSearchState(e.target.value)}
              >
                <option></option>
                {stateList.map((item, key) => (
                  <option key={key} value={item.name}> {item.name} </option>
                ) )}
              </select>
              <div className="filterName"> Categoria: </div>
              <ul>
                {categories.map((category, key) => (
                  <li 
                    key={key} 
                    className={`categoryItem ${category.slug === cat && 'active'}`}
                    onClick={() => setCat(category.slug)}
                  > 
                    <img src={category.img} alt={category.name}/>
                    <span> {category.name} </span>
                   </li>
                ))}
              </ul>

            </form>
          </div>
          <div className="rightSide">
            <h2>Resultados</h2>
            <div className="list" style={{opacity: resultOpacity}}>
              {adsList.map((ads, index) => (
                <AdItem key={index} data={ads}/>
              ))}
            </div>
          </div>
        </PageArea>
      </PageContainer>
  )
}

export default Ads;