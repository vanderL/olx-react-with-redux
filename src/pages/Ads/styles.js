import styled from 'styled-components';

export const PageArea = styled.div`
   display: flex;
   margin-top: 20px;

   .leftSide {
       width: 250px;
       margin-right: 10px;

       .filterName {
            font-size: 15px;
            margin: 10px 0;
       }

       input, select {
           width: 100%;
           height: 40px;
           border: 2px solid #9bb83c;
           border-radius: 5px;
           color: #111;
           padding: 10px;
       }

       .categoryItem {
           display: flex;
           align-items: center;
           padding: 10px;
           border-radius: 5px;
           color: #111;
           cursor: pointer;
           transition: all 0.3s;

           img {
               width: 25px;
               height: 25px;
               margin-right: 5px;
           }

           span {
               font-size: 14px;
           }
       }

       .categoryItem:hover,
       .categoryItem.active {
            background-color: #9bb83c;
            color: #fff;
       }
   }

   .rightSide {
       flex: 1;
   }
`;
