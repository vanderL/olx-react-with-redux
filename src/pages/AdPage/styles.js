import styled from 'styled-components';

export const Fake = styled.div`
    background-color: #ddd;
    height: ${props => props.height || 20}px;
`;

export const PageArea = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const LeftSide = styled.div`
    flex: 1;
    margin-right: 20px;
`;
export const AdImage = styled.div``;

export const AdInfo = styled.div`
    padding: 10px;
`;

export const AdName = styled.div`
    margin-bottom: 20px;
`;

export const AdDescription = styled.div``;

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
`;
