import React, { useState, useEffect } from 'react';
import {useLocation, useHistory, useParams} from 'react-router-dom';

import useApi from '../../services/Api';

import { PageArea } from './styles';
import {  PageContainer } from '../../components/MainComponents';
import AdItem from '../../components/partials/AdItem';

function Ads() {
    const api = useApi();

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

    useEffect(() => {
      const getRecentAds = async () => {
        const json = await api.getRecentAds({
          sort: 'desc',
          limit: 8
        });
        setAdsList(json.ads)
      }

      getRecentAds();
    }, [])

    return (
      <PageContainer>
        <PageArea>
          <div className="leftSide">
            <form method="GET">

             <input type="text" name="q" placeholder="O que você procura?" value={q}/> 

              <div className="filterName"> Estado: </div>
              <select name="state" value={searchState}>
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
                    className={`categoryItem ${category.slug === cat && 'active'}`}> 
                    <img src={category.img} alt={category.name}/>
                    <span> {category.name} </span>
                   </li>
                ))}
              </ul>

            </form>
          </div>
          <div className="rightSide">
...
          </div>
        </PageArea>
      </PageContainer>
  )
}

export default Ads;