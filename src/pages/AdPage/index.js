import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useApi from '../../services/Api';
import AdItem from '../../components/partials/AdItem';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import { 
  PageArea, 
  LeftSide, 
  AdImage,
  AdInfo, 
  AdName, 
  AdDescription,
  Box, 
  RightSide,
  Fake,
  EachSlide,
  ImgSlide,
  ListOthers,
  OthersArea,
  BreadCrumb,
} from './styles';

import { PageContainer } from '../../components/MainComponents';
import { useEffect } from 'react';
import { formatDate } from '../../helpers/FormatDate';

function Login() {
    const api = useApi();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);

    useEffect(() => {
      
      const getAdInfo = async (id) => {
        const json = await api.getAd(id, false);
        setAdInfo(json);
        setLoading(false);
      }
      getAdInfo(id);
    },[])

    return (
      <PageContainer>
        {adInfo.category && 
          <BreadCrumb>
            Você está aqui:
            <Link to="/">Home</Link>
            /
            <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
            /
            <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
            /
            {adInfo.title}
          </BreadCrumb>
        }
        <PageArea>
          <LeftSide>
            <Box className="box--leftSide">
              <AdImage>
                {loading && <Fake height={300}/>}
                {adInfo.images && 
                  <Slide>
                    {adInfo.images.map((img, key) => (
                      <EachSlide key={key}>
                        <ImgSlide src={img} alt="" />
                      </EachSlide>
                    ))}
                  </Slide>
                }

              </AdImage>
              <AdInfo>
                <AdName>
                  {loading && <Fake height={20}/>}
                  {adInfo.title && 
                    <h2>{adInfo.title}</h2>
                  }

                  {adInfo.dateCreated && 
                    <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                  }
                </AdName>
                <AdDescription>
                  {loading && <Fake height={100}/>}
                  {adInfo.description}
                  <hr />
                  {adInfo.views && <small>Visualizações {adInfo.views}</small>}
                  
                </AdDescription>
              </AdInfo>
            </Box>
          </LeftSide>
          <RightSide>
            <Box className="box--padding">
              {loading && <Fake height={20}/>}
              {adInfo.priceNegotiable && 
                <span>Preço Negociável</span>
              }

              {!adInfo.priceNegotiable && adInfo.price &&
                <div className="price">Preço: 
                  <span>R$ {adInfo.price}</span>
                </div>
              }
            </Box>
            {loading && <Fake height={50}/>}
            {adInfo.userInfo && 
              <>
                <a 
                  href={`mailto:${adInfo.userInfo.email}`} 
                  target="_blank"
                  className="contactSellerLink"
                > 
                    Fale com o vendedor
                  </a>
                
                <Box className="createdBy box--padding">
                  <strong>{adInfo.userInfo.name}</strong>
                  <small>E-mail: {adInfo.userInfo.email}</small>
                  <small>Estado: {adInfo.stateName}</small>
                </Box>
            
              </>
            }
          </RightSide>
        </PageArea>
        <OthersArea>
          {adInfo.others && 
            <>
              <h2>Outras ofertas do vendedor</h2>
              <ListOthers>
                {adInfo.others.map((item, key) => (
                  <AdItem key={key} data={item} />
                ))}
              </ListOthers>
            </>
          }
        </OthersArea>
      </PageContainer>
  )
}

export default Login;