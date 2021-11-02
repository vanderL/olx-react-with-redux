import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../services/Api';

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
        const json = await api.getAd(id, true);
        setAdInfo(json);
        setLoading(false);
      }
      getAdInfo(id);
      console.log(adInfo)
    },[])

    return (
      <PageContainer>
            <PageArea>
              <LeftSide>
                <Box>
                  <AdImage>
                    {loading && <Fake height={300}/>}
                    {adInfo.title && 
                      <h2>{adInfo.title}</h2>
                    }

                    {adInfo.dateCreated && 
                      <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                    }

                  </AdImage>
                  <AdInfo>
                    <AdName>
                      {loading && <Fake height={20}/>}
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
                </Box>
                <Box className="box--padding">
                  {loading && <Fake height={50}/>}
                </Box>
              </RightSide>
          </PageArea>
      </PageContainer>
  )
}

export default Login;