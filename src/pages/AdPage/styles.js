import styled from 'styled-components';

export const Fake = styled.div`
    background-color: #ddd;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const LeftSide = styled.div`
    flex: 1;
    margin-right: 20px;

    .box--leftSide{
        display: flex;
    }
  
    @media (max-width: 600px) {
        &{
            margin: 0px;
        }
        .box--leftSide {
            width: 320px;
            flex-direction: column;
            margin: auto;
            
        }
    }
`;
export const AdImage = styled.div`
    width: 320px;
    height: 320px;
    margin-right: 20px;
`;
export const EachSlide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 320px;
`;
export const ImgSlide = styled.img`
    width: 320px;
    height: 320px;
`;

export const AdInfo = styled.div`
    flex: 1;

    @media (max-width: 600px) {
        padding: 10px;
    }
`;

export const AdName = styled.div`
    margin-bottom: 20px;

    h2 {
        margin-top: 20px;
    }

    small {
        color: #999;
    }
`;

export const AdDescription = styled.div`
    small { 
        color: #999;
    }
`;

export const Box = styled.div`
    background-color: #fff;
    border-radius: 5px;
    box-shadow:  0 0 4px #999;
    margin-bottom: 20px;

   
`;

export const RightSide = styled.div`
    width: 250px;

    .box--padding {
        padding: 10px;
    }

    .price span {
        color:  #0000ff;
        display: block;
        font-size: 27px;
        font-weight: bold;
    }

    .contactSellerLink {
        background-color: #0000ff;
        color: #FFF;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0 0 5px #999;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin-bottom: 20px;
    }

    .createdBy strong {
        display: block;
    }

    .createdBy small {
        display: block;
        margin-top: 10px;
        color: #999;
    }

    @media (max-width: 600px) {
        width: auto;
        margin-top: 20px;

        .box--padding {
           width: 320px;
           margin: auto;
        }

        .contactSellerLink {
            width: 320px;
            margin: 20px auto;
        }
    }
    
`;

export const OthersArea = styled.div`
    h2 {
        font-size: 20px
    }

    @media (max-width: 600px){
        & {
            margin: 10px;
        }
    }
`;

export const ListOthers = styled.div`
    display: flex;
    flex-wrap: wrap;

    .adItem {
        width: 20%;
    }

    @media (max-width: 600px) {
       .adItem {
           width: 50%;
       } 
    }
`;

export const BreadCrumb = styled.div`
    font-size: 13px;
    margin-top: 20px;

    a {
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
        color: #111;
    }

    @media (max-width: 600px) {
        & {
            margin: 20px;
        }
    }
`;
