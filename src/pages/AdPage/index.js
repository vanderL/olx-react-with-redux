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

function Login() {
    const api = useApi();

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);

    return (
      <PageContainer>
            <PageArea>
              <LeftSide>
                <Box>
                  <AdImage>
                    {loading && <Fake height={300}/>}
                  </AdImage>
                  <AdInfo>
                    <AdName>
                      {loading && <Fake height={20}/>}
                    </AdName>
                    <AdDescription>
                      {loading && <Fake height={100}/>}
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